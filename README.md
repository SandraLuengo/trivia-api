# Trivi Api 

## Ecosystem

| Project | Description |
|---------|-------------|
| [react]               | As Front-End Framework |
| [Context Api]               |Global State Manager |
| [styled-components]        |Css with javascript logic|


## To run the application 📦🚀

Clone the application:
````
git clone https://github.com/SandraLuengo/trivia-api
````

Run the client:
````
cd trivia-api/
yarn install
yarn start
````

Run tests in client:
`````
cd client/
yarn test
`````

## Extra Features ✨ ✨ 

 ### Form Filters:
 - Is missing to make a category filter, I´ve got the route to get all the categories and the logic to filter by them, but the API needs the category´s Id instead of the name, It´s suppose more develop time, so I´ve omitted  this filter.
 
 ### Pagination:
- The pagination´s logic is not developed because I cant get all the data from the API, the max is 50 elements. My first idea was get 50 different elements each time that the user click in the pagination, for that I generate the API token, this way I'm sure that the data is never repeated, but make a real pagination with this API is a lot of work because it supposes to create an object with the relation between the page and the data, to be able to be navigated by the user.

### Table

- The data of the API did´t provide neither ID nor creator, so I've mocked them.
