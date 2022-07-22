Deployment using heroku-cli
```powershell
heroku --version
heroku login
heroku update beta
heroku plugins:install @heroku-cli/plugin-manifest
heroku create smendowski-daftacademy-heroku --manifest --region eu
git remote
git commit -am "Task finished"
git push heroku main
```