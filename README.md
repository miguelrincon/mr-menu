# mr-menu | Display a menu in an accordion style easily

This project shows a few basic structures and encapsulation of components using angular.

The 2 main components of the application are:

## Menu

```
<mr-menu data="sampleData"></mr-menu>
```

The data may be loaded a json file using and angular $http or ajax call.


## Menu Item

```
<mr-menu-item>
```

## Run this project 

First install all the project's dependencies by running

```
npm install
```

Both npm and bower components will be downloaded, after that, the small demo application 
can be ready to be started.

```
npm start
```

This will create a `http-server` on port 8000. Go to the demo at [http://localhost:8000/](http://localhost:8000/)

## Run tests

```
npm test
```
We use karma and jasmine to run the tests.

### Behind firewalls

npm might not work if downloaded in China, try [https://github.com/cnpm/cnpm](cnpm) 
project to run the `install` portion of this steps.