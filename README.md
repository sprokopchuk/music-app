## Before starting the project

In order to start the project make sure that you set up all env variables in `env.example`. 
This file should be rename to `.env.development` or `.env`. 
Variable `REACT_APP_BACKEND_API` is just back-end server that should be running altogether with main web-app.
As back-end api json-server was used. It can be installed via `npm install json-server`.
File `json.db` should be created in project directory, as example you can find in project directory `db_json.example`  
To start back-end server you should run `json-server -w db.json -p 3001`.

## LAUNCH THE PROJECT

In the project directory, you run `yarn start`.    


