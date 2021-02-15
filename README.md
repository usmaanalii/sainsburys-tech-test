# Sainsburys Tech Test

Your solution should:
- [x] Be a website, using React
- [x] Consume a JSON feed of products and display them on a page
- [x] Allow users to add a product to their basket
- [x] Allow users to view the products in their basket

## Assessment

I have purposefully left the `branches` in the repository as a means of demonstrating how I went about the task, my `commits` also show that I am mindful of being efficient in how I utilise git, I definitely have a phobia for `git` misuse and a shoddy commit history.

Initially in `master` I created a somewhat working prototype, in `use-context` I added **a** solution for managing state globally in the applciation **and** demonstrated some unit testing. In `accessibility`, I applied *some* accessibility practices and `styles` adds a little cosmetic work to the application. This branch contains some documentation, hence the name `documentation`. 

### How clean, modular and extensible the code is ###

The components have been designed based on a pattern that a senior developer has taught me at my current job. I appreciate how it allows a clean seperation of the logic to the view. The added benefit of this, is that both aspects of the component can be unit tested in isolation, producing smaller units of more readable and extensible code. With **more time** I would have refactored the *products container* into it's own component and reused it. I'm also aware that `useReducer` would have been more performant that `useContext`, but it was a nice opportunity to play with the context API.

### Suitability of tools, libraries annd frameworks used)

My approach to the tooling, libraries and frameworks for this demo is demonstrative of how I approach code and problems in general. The feeling I have, is that you should always reduce your dependencies and try to achieve the result "in house" as long as it is cost and time effective to do so. As far as the build process, I used `create react app` simply because it is time effective and well proven. Had I not had a busy weekend and more resources, I perhaps would have created the project using a minimal webpack configuration, only adding in build configuration's as I needed them. I didn't fetch for any particular styling libraries such as `semantic ui` or the like, because I tried to keep the solution minimalistic in nature. I did use `css modules` as it allows unique class names for individual components.

### How it looks visually and the techniques used to style the application

This is perhaps the weakest part of the solution, which again is a window into how I am as a developer, my focus was more on demonstrated my methodology in architecting the codebase, leaving design to the last stage. Time constraints prevented me from making this aesthetically pleasing. If I had more, I would have looked at various shopping cart experiences from retailers, dribble and other resources and use these industry standards to come up with a better user experience. As mentioned prior, I kept it simple with `css modules` adding to the clean, modular and extensible theme. On a bigger project, `scss` could be used or even something like  `styled-components`.

## Responsive web design techniques, and the approach used for layout and accessibility

I didn't dedicate as much time as I would have liked to, to the design aspect as mentioned previously. But I did utilise `flexbox` for the layout, which enables the application to be responsive. The layout currently has the *known problem* of the last row not aligning to the left, which I feel would have looked much better. In terms of accessibility, I attempted to use semantic html elements, this isn't something I have had to do at work therefore haven't got too much exeperience with, I have added a document title for screen readers and also an `aria` label for the button. The build tool ships with `eslint-plugin-jsx-a11y` which helps.

### Testing

I have provided unit tests for the `Home` component as a demonstration for how I have been taught to practice `tdd` at my current company. It's something I have recently been applying to my code and I see tremendous benefits.

### Anything abive and beyond, e.g animation, routinng annd accessibility

There is an animation on the button (I just did this for the satisfaction of hitting everything mentioned on the brief). I utilised `react router` as it is an industry standard and makes the code more modular and clean. Accessibility has been discussed prior.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
