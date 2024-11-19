### OBJECTIVE
Develop a simple web application where users can view, add, edit, and delete user details from a mock backend API.
### REQUIREMENTS
`User Interface`:
Display a list of users with details such as ID, First Name, Last Name, Email, and Department.
Provide buttons or links to "Add", "Edit", and "Delete" users.
A form to input details of a new user or edit details of an existing user.

`Backend Interaction`:
Use JSONPlaceholder, a free online REST API that you can use for demonstration and test purposes.
Specifically, use the '/users' endpoint to fetch and manipulate user data.

`Functionality`:
View: Display all users by fetching data from the '/users' endpoint.
Add: Allow adding a new user by posting to the '/users' endpoint. (Note: JSONPlaceholder won't actually add the user, but will simulate a successful response.)
Edit: Allow editing an existing user. This should involve fetching the current data for a user, allowing for edits, and then putting the updated data back via the API.
Delete: Allow users to be deleted, by sending a delete request to the API.

`Error Handling`:
Handle scenarios where the API request might fail - show an error message to the user in such cases.

`Bonus (Optional)`:
Implement pagination or infinite scrolling for the user list.
Add client-side validation for the user input form.
Make the interface responsive.

### Installation steps
Run these in the terminal 
1) npm install react-icons
2) npm install axios
3) npm start

### Working 
> When clicked on the user card, the details of that paticular user gets displayed.
> You can make changes(edit) in the details if wanted and click on save to make the changes. Orelse when clicked on cancel you will go back to users page
> If you want to delete the paticular user, click the delete icon which is present on the top-right corner of the card, once clicked it asks for a confirmation, if clicked on 'OK', the user gets deleted if clicked on 'Cancel' it gets back to user page without deleting the user
> To add new user, click on 'Add User' button on the right corner and start to fill details and click on save to add that user.
> If any of the details is not filled, an error message with "All fields are required" will be displayed.
***Note: All details must be filled in order to save the new user.

### Github user
https://github.com/shaarvanipotharajula




















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
