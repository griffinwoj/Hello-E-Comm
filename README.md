## HELLO E-Com

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a useful Express.js API that connects to a MySQL database using Sequelize called Hello E-Comm. This API offers functionality for adding data to the database, modifying it, deleting it, and viewing it as formatted JSON.

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

```md
bash
Copy code
git clone https://github.com/griffinwoj/Hello-E-Comm
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
```

Test API POST, PUT, and DELETE routes in Insomnia Core. You should be able to successfully create, update, and delete data in your database.

## Walkthrough Video

https://watch.screencastify.com/v/p3DAcfGCHciIv3Aghjku

## Technologies Used

```md
Express.js
MySQL
Sequelize
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Further Development

-need to add a seeding function to cut time on adding data to the database

-some how add a way to add images to the products

## License and Copywrite

Copyright Edx source code 2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
