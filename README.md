## Books Library

### Description

This web application was created as part of my project for General Assembly's Software Engineering Immersive Unit 2 - Front-End Development.

It allows users to search for books by keyword, title, author or category. Users can add the books to "my library" to keep track of the books that they want to read. Upon clicking the book image in the "main" or "my library" pages, users can see more details of the book.

### Class Hierachy

![class hierachy](./screenshots/class_hierachy.jpg)

### Screenshots of Web Application

Main Page
![main page](screenshots/mainpage.jpg)

List of Books on Main Page after searching
![main page search](screenshots/mainpage-react.jpg)

List of books on Library Page
![library page](screenshots/librarypage.jpg)

Book Detail Page
![book detail page](screenshots/bookdetailpage.jpg)

Add notes for each book in Book Detail Page
![notes](screenshots/notes.jpg)

Update notes modal in Book Detail Page
![update notes modal](screenshots/updatenotesmodal.jpg)

Clicking on `GET IT ON Google Play` opens the book in Google Play
![google play](screenshots/google-play.jpg)

### Technologies Used

#### React

- Used for state management
- Leveraged on react hooks such as useState, useEffect and useParams
- Created reusable UI components

#### Tailwind CSS

- Used for creating the user interface and styling the web application

#### Airtable

- Used as a database for CRUD operations

Screenshot of my_library table in books-library database
![airtable my library](screenshots/airtable-my-library.jpg)

Screenshot of my_notes table in books-library database
![airtable my notes](screenshots/airtable-my-notes.jpg)

### Getting Started

The following phases were done prior to project completion.

- Researching on available APIs
- Deciding on the API
- Creating user stories on a [public board](https://github.com/users/odebear27/projects/2)
- [Initial planning](https://drive.google.com/file/d/1fM9Zc3V_2jbzrDXYJLUl3-ymQriF0OWO/view?usp=drive_link)
- Project proposal to instructors
- Working on the code
- [Deployment](https://books-library-ga.netlify.app/)
- Project presentation

#### Installation

Clone the repository to your local machine

```
https://github.com/odebear27/books-library.git
```

Navigate to the project directory

```
cd books-library
```

Install the project dependencies

```
npm i
```

#### Running the application

Once the dependencies are installed, start the development server

```
npm run dev
```

### Next Steps

- Allow users to remove the book from "my library" page in order not to clutter up the space in "my library" page
- Create a list of "You may also like" books as a recommendation feature so that users can have more options
- Have an advanced book search function

### Development Environment

This web application was created on Windows 10 machine with a display resolution of 1920 x 1080, tested on Google Chrome browser Version 121.0.6167.187.

While efforts have been made to ensure compatibility across different screen sizes and browsers, there may be variations in styling and performance depending on your specific environment.

### Credits

This web application would not have been made possible without the following.

- [Google Books API](https://developers.google.com/books/docs/overview)
- Background Image: Photo by Max Langelott on [Unsplash](https://unsplash.com/photos/high-raise-photography-of-library-wWQ760meyWI)
