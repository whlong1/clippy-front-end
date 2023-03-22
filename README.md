<img src="src/assets/logos/logotypes/logotype-sq-b-dark.svg"/>

## Clippy Front-end

Clippy is a web application designed to simplify the management of online courses. With Clippy, instructors can easily manage coursework, give feedback to students, take attendance, grade deliverables, and track student progress. Students can join cohorts, submit homework, receive feedback, and view their standing in the course. Auth0 is used for user authentication and authorization.

> Please note, this is the client app for Clippy. To run the backend server, please visit the [clippy-back-end](https://github.com/whlong1/clippy-back-end) for instructions.

## Getting Started

To run the Clippy Front-end on your local machine, follow these steps:

1. Clone this repository:

```
git clone https://github.com/[username]/clippy-front-end.git
```

2. Navigate to the project directory:

```
cd clippy-front-end
```

3. Install the required dependencies:

```
npm install
```

4. Create a .env file in the root directory with the following variables:

```
REACT_APP_AUTH0_DOMAIN=[Auth0 domain]
REACT_APP_AUTH0_AUDIENCE=[Auth0 audience]
REACT_APP_AUTH0_CLIENT_ID=[Auth0 Client Id]
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000
REACT_APP_BACK_END_SERVER_URL=http://localhost:3001
```

5. Start the development server:

```
npm start
```

6. Open your web browser and navigate to http://localhost:3000 to access the Clippy web application.


## Video Demo (Coming Soon)

We're currently working on creating a video demo of our application, which will showcase its key features and functionality.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- React
- Node
- Express
- MongoDB
- Mongoose
- Auth0
- React Query
- React CodeMirror

## Todos

- [x] Add quack sound effect to home page link.

- [ ] Add meta tags.

- [ ] Add support for mobile devices.

- [ ] Add validation for external links.

- [ ] Display data metrics for instructors.

- [ ] Add student stats to the My Profile page.

- [ ] Add guide in Getting Started for Auth0 setup.

- [ ] Research applicability of Query Key Factories.

- [ ] Audit the styling of popup components for consistency.

- [ ] Review the directory structure of the Submission Panel.

- [ ] Add default start time to Cohort model and associated forms.

- [ ] The JoinCohorts component should make use of the indexCohorts hook.

- [ ] Add a conditional redirect to deliverable detail views if no lab exists.

- [ ] Audit query keys. A more consistent pattern will be desirable as we scale.

- [ ] Allow site admin to grant admin access within the app, as opposed to the Auth0 dashboard.

- [ ] Prevent the resolve functionality from marking a withdrawn student's deliverables as complete.

- [ ] Add a message to the onboarding stage that indicates which cohort a user has requested access to.

- [ ] Display default time for the Due Date property of new deliverables. Currently facing timezone issues.

- [ ] Make it easier for students and instructors to switch cohorts, and correctly set their default cohort.

- [ ] Address multicohort membership issues. The isWithdrawn boolean on Profile could potentially cause issues with the rendering of deliverable status if a user is in multiple cohorts.

- [ ] Address the refresh token rotation issue in Safari and Firefox. Visit the [Auth0 documentation on token rotation for more information.](https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation)


## Credits
This project was made possible thanks to the following technologies:

- React Query - A data-fetching library for React. Visit the [React Query GitHub page](https://github.com/tannerlinsley/react-query) for more information.

- React CodeMirror - A code editor for React apps. Visit the [React CodeMirror GitHub page](https://uiwjs.github.io/react-codemirror) for more information.

- Auth0 - A platform for authentication and authorization. Visit the [Auth0 website](https://auth0.com/) for more information.




