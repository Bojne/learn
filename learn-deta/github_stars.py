from logging import raiseExceptions
from deta import Deta  # Import Deta
import httpx
import os
import time
from deta import app


key = os.environ.get("PROJECT_KEY")

if not key:
    raiseExceptions("Can not read project key from the envrionment")

# Initialize with a Project Key
deta = Deta(key)

# This how to connect to or create a database.
db = deta.Base("github_stars_db")


def get_github_stars(repo):
    if repo:
        url = f"https://api.github.com/repos/{repo}"
        count = httpx.get(url).json()["stargazers_count"]
        return count
    else:
        return -1


repos = ["PrefectHQ/Prefect", "PrefectHQ/miter-design"]


@app.lib.cron()
def update_stars(event):
    for repo in repos:
        current_time = time.ctime()
        stars = get_github_stars(repo)
        db.put({"repo_name": repo, "time": current_time, "stars_count": stars})
    print("FINISH PROCESS!")
    return
