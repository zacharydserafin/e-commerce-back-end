# E-Commerce Back End Demo


## Table of Contents

1. [Description](#description)
2. [Installation](#install)
3. [Usage Instructions](#usage)
4. [Questions](#questions)

## <a id="description"></a>Description 

This project is designed to simulate the back end mechanics of an e-commerce web application. With it properly set up, one could use a tool like Insomnia to test the different CRUD routes of this RESTful application.

## <a id="install"></a>Installation 

Run "npm install" on your CLI from the root directory to get the necessary dependencies. Then, initialize the database in your mysql shell using the "schema.sql" file found in the folder marked "db". Also, be sure to input your mysql credentials into a .env file before proceeding, using the database listed in the "schema.sql". Next, run "node seeds/index" to seed the database. Finally, run "npm start" to initialize the express server.

## <a id="usage"></a>Usage Instructions 

Once the database has been created, seeded, and the express server initialized, use a product like Insomnia to test out the different routes. Use the following url: "http://localhost:3001/api/" followed by either "categories", "products" or "tags" to modify the contents of the database. Specific usage instructions for each route can be found in comments throughout the "routes" folder.

<a href="https://drive.google.com/file/d/1x2kPtdS8K4nEa7hqUrB5vGm2a9j4ZzTF/view">Demonstration Video</a>

## <a id="questions"></a>Questions 

Any questions or concerns regarding the project, you can contact me via my email: zserafin@hotmail.com

For more of my work, visit my GitHub: https://github.com/zacharydserafin
