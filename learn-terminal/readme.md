## Set up your terminal: 

### 1. Speed up the init time 
I used the following shell script to figure out my terminal is super slow:
```
for i in $(seq 1 5); do /usr/bin/time $SHELL -i -c exit; done

```
I go to `./zshrc` to find what gets executed during the initialization process. Turn out it's the anaconda environment that takes quite a while (3 sec) to get activate. 

I find this script on Forum that disable the activation call: 

```conda config --set auto_activate_base false```

Script -> ✨ -> the terminal became super fast!! 

However, without anaconda environment, common command won't work (pip install for example). I set alias of `ca="conda activate"` to help us quickly set up the environment. Also alias `jp="conda activate && jupyter notebook"`, as I used it quite frequently.

### 2. Customize my terminal    

- I use iTterm2 + oh-my-zsh (with powerlevel9k plugin). 
- I customized the font, size, color, etc.  

Final result: 

![](/terminal-v1.png)

Version 1 

![](/terminal-v2.png)

Version 2 

