add this to package.json
"scripts": {
    "start": "node server.js"
}

on server.js add:
const PORT = process.env.PORT || 3000;


