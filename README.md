
# Book Search and Personal Bookshelf

This project is a web application that allows users to search for books using the Open Library API and add books to their personal bookshelf. The application is built using React and utilizes the Web Storage API (localStorage) to store the user's bookshelf data persistently.
# Prerequisites
 Before running the project locally, ensure that you have the following installed on your machine:
- Node.js (version 12 or above)
- npm (version 6 or above)
#Setting up the Project Locally
- Clone the repository to your local machine using the following command.
- git clone https://github.com/PavanRaghavendra/BookSearch.git
- Navigate to the project directory:.
- cd BookSearch.
- Install the project dependencies by running the following command
- npm install
- This will install all the necessary packages and libraries required for the project.
Open your web browser and visit http://localhost:3000 to access the application.
On the home page, you will see a search input field where you can enter the name of a book you want to search for.
As you type, the application will display search results in real-time, fetching data from the Open Library API.
Each search result will be displayed as a card, showing the book's title, author(s), and first publish year.
To add a book to your personal bookshelf, click on the "Add to Bookshelf" button on the corresponding book card.
To view your personal bookshelf, click on the "Go to My Bookshelf" button on the search results page. This will redirect you to the /bookshelf page.
On the bookshelf page, you will see a list of all the books you have added to your personal bookshelf.
The bookshelf data is stored persistently using the Web Storage API (localStorage), so your bookshelf will retain its contents even if you refresh the page or close the browser.

Additional Notes

The application is designed to fetch book data from the Open Library API. Make sure you have an active internet connection while running the application.
The project uses React for building the user interface and managing component state. Familiarity with React and its concepts is recommended for understanding and modifying the codebase.
The project structure follows a standard React application setup. The main components can be found in the src directory.
Feel free to explore the codebase and make any necessary modifications or enhancements based on your specific requirements

