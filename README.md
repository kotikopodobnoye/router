# SPA & API

This project is a multi-page application built using React and the react-router-dom library. It utilizes the JSONPlaceholder API (https://jsonplaceholder.typicode.com/) for data retrieval.

## Pages

1. User List Page:
   - Displays a list of system users.
   - Clicking on a user navigates to Page 2.

2. User Details Page:
   - Shows detailed information about a user, including their albums.
   - Clicking on an album navigates to Page 4.
   - Clicking on the user's name navigates back to Page 2.

3. Album List Page:
   - Displays a list of album names.
   - Clicking on an album navigates to Page 4.

4. Album Details Page:
   - Shows the photos of an album and the user who created it.
   - Displays a loading indicator while album data is being fetched.
   - Clicking on the user's name navigates back to Page 2.

5. 404 Page:
   - Displays a "Return to Home" link.
   - Shown when the URL path is not supported by the application.
   - Custom implementation by the developer.

## Technologies

- React
- react-router-dom for routing

## Usage

- Click on the user from the User List to view their details and albums.
- Click on an album from the User Details or Album List to view its details and photos.
- Click on the user's name from the Album Details to go back to their details.
- If the URL path is not supported, the 404 page will be displayed with a link to return to the home page.

Feel free to explore the application and navigate between different pages to view user and album information!

