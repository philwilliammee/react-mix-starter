#!/bin/bash
if type -P git > /dev/null
    then
        echo "installing from repo"
        git clone https://github.com/philwilliammee/react-mix-starter.git
        cd react-mix-starter/
        echo "removing remote url"
        git remote rm origin
    else
        echo "Error: installation failed GIT is required"
        exit 0
    fi

if type -P npm > /dev/null
    then
        echo "installing node files"
        npm install
        npm update
    else
        echo "Error: installation failed NPM is required"
        exit 0
    fi

CUR_VER=$(npm -v)
MIN_VER=6.0
if [ $(awk '{printf($1 >= $2) ? 1 : 0}' <<<" $CUR_VER $MIN_VER ") -eq 1 ] ;
    then
        echo "checking for sucurty vulnerabilities and fixing"
        npm audit fix
    else
        echo "updating to the latest version of npm"
        npm install npm@latest -g
        echo "checking for sucurty vulnerabilities and fixing"
        npm audit fix
    fi
echo "testing build"
npm run dev
echo "to automaticly compile: npm run watch "

if type -P lando > /dev/null
    then
        read -r -p "Do you want to start lando server? [y/N] " response
        if [[ "$response" =~ ^([yY][eE][sS]|[yY])+$ ]]
        then
            lando start
        fi
            lando stop
    else
        echo "installation complete"
    fi

