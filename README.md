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
 Install nodejs
```
###### Database
```
    Install MySql DB
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
	db:       'testdb'       // your database name

User can change accordingly
```

##### Run unit test
```
npm test
```

###### Dependency modules
```
- express: Web server framework
- mysql: Database connection 
- mocha: Unit test
```

## Reference
```
- https://bezkoder.com/node-js-express-sequelize-mysql/ (Node, Express, Sequelize, MySQL stack reference)
- https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize 

```
