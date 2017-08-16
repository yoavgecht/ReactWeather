add this to package.json
"scripts": {
    "start": "node server.js"
}

on server.js add:
const PORT = process.env.PORT || 3000;


Heroku cradentials:
username: yoavgecht@gmail.com
password: Criminal13


to deploy to heroku:
webpack
git add .
git commit -m "project"
git push origin master
git push heroku master

