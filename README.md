## Summary
```
System administration for teachers to manage students
```
## Node version
```
v13.8.0
```

## How to run

###### nodejs
```
Install nodejs (https://nodejs.org/en/)
```
###### Database
```
Install MySql (https://dev.mysql.com/downloads/mysql/)
```
##### Run application locally
```
git clone https://github.com/prwhoeatsnonstop/student_manager.git
cd student_manager
npm install
node server
```
##### Database Configuration
```
The default config is:

	HOST:     'localhost', 	    // database host
	USER:     'root',           // your database username
	PASSWORD: '123456',        // your database password
	DB:       'testdb'       // your database name

User can change accordingly
```

##### Run unit test
```
npm test
```

###### Dependency modules
```
- Express.js: Web server framework
- MySQL: Database connection 
- Mocha: Unit test
```

## Reference
```
- https://bezkoder.com/node-js-express-sequelize-mysql/ (Node, Express, Sequelize, MySQL stack reference)
- https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize 
- https://sequelize.org/master/manual/advanced-many-to-many.html#many-to-many-to-many-relationships-and-beyond

```
