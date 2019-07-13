# Eat da Burger!
This full-stack web app allows users to input a type of burger they want to eat. On submit the new burger is added to the burger menu on the left side of the screen with a "Devour it!" button. Clicking the devour button moves the burger to the "Burgers You've Eaten" list on the right side. Burger data is stored to in a MySQL database for persistent results.

## Technologies Used
* Node.js
* MySql
* Handlebars
* jQuery
* HTML 5 & CSS3
* Boostrap

## How It Works
* The app follows the MVC structure and uses an ORM: Connection > ORM > Model > Controller
* On page load a database query gets all burgers and displays them in the menu.
* Clicking "Devour It!" sends a put request to update the eaten status for the burger.
* An html form allows user input to add new burgers to the menu. Clicking submit triggers a post request to add the new burger to the databse.
* Front-end javascript validation was added to prevent adding a burger with no name.
* A Bootstrap modal alerts the user to fill in a type of burger.