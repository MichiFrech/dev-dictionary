if [ -f dictionary.json ]; then
  cp dictionary.json dist/
  git config --global user.email "kensplanet@yahoo.com"
  git config --global user.name "kensplanet"
  git checkout master
  git remote set-url origin git@github.com:kensplanet/dev-dictionary
  git add dictionary.json
  git commit -m "[skip ci] update dictionary"
  git push origin master
fi
