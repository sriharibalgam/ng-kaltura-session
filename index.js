git init
git add *.json *.js .gitignore README.md
git commit -m "First version of my app"
git tag -a 0.0.1
git remote add origin https://github.com/username/RepoName.git
git push origin master 

bower register myPackageName git://github/username/RepoName.git