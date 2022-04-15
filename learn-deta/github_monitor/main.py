from deta import Deta, app  # Import Deta
import httpx
import time
from flask import Flask


def get_github_stars(repo):
    if repo:
        url = f"https://api.github.com/repos/{repo}"
        count = httpx.get(url).json()["stargazers_count"]
        return count
    else:
        return -1


repos = ["PrefectHQ/Prefect", "PrefectHQ/miter-design"]


@app.lib.cron()
def update_stars(event=None, repos=repos):
    # Initialize with a Project Key
    deta = Deta()

    # This how to connect to or create a database.
    db = deta.Base("github_stars_db")

    for repo in repos:
        current_time = time.ctime()
        stars = get_github_stars(repo)
        db.put({"repo_name": repo, "time": current_time, "stars_count": stars})
    print("FINISH PROCESS!")
    return f"Collect stats of repo {repos} and sent to DB!"


app = Flask(__name__)


@app.route("/", methods=["GET"])
def main():
    return f"Monitoting Github data of repos: {repos}"


@app.route("/run", methods=["GET"])
def collect_stat():
    return update_stars()
