#!/user/bin/env sh

set -e

npm run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:inm-web-labs/inm-labs-component-library.git master:gh-pages

cd -

read
