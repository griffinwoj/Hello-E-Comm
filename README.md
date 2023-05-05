
##  HELLO E-Com

## Description


## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```
## Installation
Clone the repository and navigate to the project directory.

bash
Copy code
git clone https://github.com/username/repo-name.git
cd repo-name
Install the dependencies.

bash
Copy code
npm install
Create a .env file in the root directory and add the following variables.

makefile
Copy code
DB_NAME=<database-name>
DB_USER=<mysql-username>
DB_PASSWORD=<mysql-password>
Run the schema and seed commands to create a development database with test data.

bash
Copy code
npm run schema
npm run seed
Usage
Start the server.

bash
Copy code
npm start
Open API routes in Insomnia Core for categories, products, or tags. The data for each of these routes is displayed in a formatted JSON.

Test API POST, PUT, and DELETE routes in Insomnia Core. You should be able to successfully create, update, and delete data in your database.


Technologies Used
Express.js
MySQL
Sequelize
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
MIT