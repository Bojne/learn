
# =====================================================================================================================
# Oh my zsh settings
# =====================================================================================================================

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
ZSH_THEME="ys"

# Disable auto title setting
DISABLE_AUTO_TITLE="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
DISABLE_UNTRACKED_FILES_DIRTY="true"

# Disable permission checks
ZSH_DISABLE_COMPFIX="true"

# =====================================================================================================================
# Plugins declaration
# =====================================================================================================================

# zsh-syntax-highlighting -> https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md
# zsh-autosuggestions -> https://github.com/zsh-users/zsh-autosuggestions

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# zsh-syntax-highlighting zsh-autosuggestions is installed via homebrew
plugins=(git emoji zsh-autosuggestions)

# =====================================================================================================================
# Plugins settings
# =====================================================================================================================

# =====================================================================================================================
# Sourcing
# =====================================================================================================================

# Oh my zsh
source $ZSH/oh-my-zsh.sh
source ./zsh-syntax-highlighting/zsh-syntax-highlighting.zsh


alias ca='conda activate'
alias jp='jupyter notebook'
alias coobygo='gp && gulp build && gulp deploy'
