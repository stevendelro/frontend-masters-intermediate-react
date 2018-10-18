# Intermediate React

[See the course website here][v4].

This course was written for and recorded by [Frontend Masters][fem]. The code here is licensed under the Apache 2.0 license and the [course notes][v4] are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.

[v4]: https://bit.ly/react-v4
[fem]: https://frontendmasters.com/courses/react/

## Why am I taking this course?

This is the second course from Brian Holt's two-part React series over at frontendmasters.com.

My intention with this course is to get a better understanding of the current tools that many React developers are using in the workplace. Once completed, I'll be shifting all my focus on my portfolio, the projects within my portfolio, and solving a ton of coding problems.

These repos aren't meant for anything other than a place to write my notes and to keep my self accountable. Also, I see it as a great way for any future developers to check out and see how my mind works. I'm no Michael Pollan, but my reading my writing would be the best way to get a feel for my personality without actually meeting me.

Anyway, enough with the introduction.

Let's get started.

## Course Notes Outline

1. Testing React
   - Jest
   - Make your tests fail
   - Istanbul & code coverage
   - Advice
2. CSS in JS
   - Emotion & React-Emotion
   - Tagged Template Literals
   - Is CSS in JS a good thing?
3. Code Splitting
   - React-Loadable
   - React-Loadable Tips
   - React.Fragment
   - Prefetching
4. Redux
   - The Store
   - Reducers
   - Actions & Action Creators
   - Connecting Redux To A Component
   - Thunks & Dispatch
   - Connecting The Actions to Respond To User Input
   - Wrap Up
5. Server Side Rendering
   - ClientApp.js
   - Setup Production Build Scripts
   - Create An Express Server
   - renderToNodeStream
6. Preact
7. Code Organization
8. TypeScript with React

## Notes

### Testing React

###### Jest

- We kick off this section by installing `jest` and `react-test-renderer` into our devDependencies.
- Holt comments on Jest being Facebook's unofficial testing library, and if needed, we could reference the official Jasmine docs since Jest is primarily based off of that library.
- Also, Holt mentions thst `react-test-renderer` was created for us to render React code through Node, which makes it much, _much_ faster than rendering it to the browser.
- Our first test is looks at our Details.js page, converts everything on it to JSON, then takes a snapshot of it using `.toMatchSnapshot()`.
- The first time you run this test, it will always pass. Every time thereafter it will compare the last snapshot with a current snapshot and the test will fail if any changes have been made.
- This super basic, low complexity test works well when you need to ensure that data received from an external API call is coming in exactly as you expect.

###### Make your tests fail

- Holt recommends that along with getting your tests to pass, you also want to be able to make them fail.
- This extra step of modifying your code to make your assertions fail _on purpose_ will give you reassurance that the tests you are running are passing as you intended.
- Jest is intelligent enough to always run the last test to fail, first. This means that Jest will run your tests out of order in order to reach a "fail" as fast as possible. To have that capability available—out of the box—is pretty impressive.

###### Istanbul & code coverage

- Jest also incorporates another library within it called "istanbul" which checks for test code coverage throughout your project. We set up a npm script with the `--coverage` flag and run it.
- Our console then displays a nicely color formatted chart that shows how much of our project's code is covered by tests. This is pretty cool.
- Even cooler, when we run the coverage command, istanbul creates a **coverage** directory in your project. Within it, there's a directory named **lcov-report** and within that there's an **index.html** file.
- When you open that **index.html** file in your browser, it will take you to a generated report of the test code coverage for your project—complete with highlighted sections of your code to show you exactly what you need to write tests for.

###### Advice

- Holt warns us to be weary of falling into the trap of constantly shooting for "100% coverage".
- The goal isn't to cover 100% of your code, because you could do that with terrible tests. The goal is to write _really good_ tests, not simply to get 100% code coverage.
- The code coverage percentage as a _relative measurement_ for us to gauge what areas of our code may need more attention.

## CSS in JS

- I'm pretty excited for this section. The majority of my portfolio is written in Sass and I'm pretty curious on whether or not what I learn in this section would help me optimize my code.
- Holt briefly addresses the unresolved angst that the React community has with CSS in JS. He then assures us that he will share is personal opinion on the matter after he brings us up to speed.

###### Emotion & React-Emotion

- First things first, we `npm install emotion react-emotion`. We then head over to App.js and extract out the Header logic into its own component file: NavBar.js.

- We import the `styled` function from react-emotion, passed the string `"header"` to it and used it to create an instance of a new variable named `Container`.

Here's NavBar.js in its entirety as of right now:

    import React from 'react';
    import { Link } from '@reach/router';
    import styled from 'react-emotion';

    const Container = styled("header")`
      background-color: #333;
      position: sticky;
      top: 0;
      z-index: 10;
    `;

    const NavBar = () => (
      <Container>
        <Link to="/">Adopt Me!</Link>
        <Link to="/search-params">
        <span aria-label="search" role="img">
            🔍
        </span>
        </Link>
      </Container>
    );

    export default NavBar;

###### Tagged Template Literals

- That back-tick block that you see up there in `Container` is a [Tagged Template Literal](https://www.youtube.com/watch?v=kj8HU-_P2NU).
- This was my first exposure to it, so bear with me: from my understanding, when you call a function followed by a template literal, that function will be called with two arrays as arguments:
  1. One array would include all the strings within that template literal, with each array item being the string value of whatever is between expressions.
  2. The second array would include all the expressions within that template literal, with each array item being the resulting value of each expression, separated by the strings.
- In the browser, this functions just like having normal CSS applied the traditional way.
- I'm assuming that the two arrays that result from this particular Tagged Template Literal are:
  1. An array of keys: `['background-color', 'position', 'top', 'z-index']`.
  2. An array of values: `['#333', 'sticky', 0, 10]`.
- These two arrays are then manipulated by `react-emotion` to create the CSS we want to be applied to our Header.
- Because we are using Tagged Template Literals, we now have the ability to inject javascript into our CSS via expression interpolation, aka: `${ }`. Whaat. This is nuts.
- I'm actually pretty excited now. The entire design structure of my portfolio will need to get reworked, which means I'll have a ton of real-world practice to apply what I've just learned.

###### Is CSS in JS a good thing?

- Having CSS in JS can make it relatively easy for us to have our CSS interact with our component state.
- Holt shows us a hilarious example of this by making our spyglass emoji rotate faster and faster with every click from the user.
- It looks like his opinion of CSS in JS is extremely positive. I like it too. Having all a component's Javascript, CSS and JSX located within one file seems much more intuitive to me than having everything abstracted away, only to be completely assembled during the build phase.
- His opinion is roughly: having CSS in JS lets us see CSS in a different light, and innovations like this are really pushing the Javascript community forward. He then vouches for CSS modules as being a great middle-ground option between pure CSS and Emotion if you still aren't fully convinced.

## Code Splitting

- The last section definitely left me with some cool ideas on how to revamp my portfolio, but code splitting just might be the single most effective thing for me to implement in order to ramp up my site's performance.
- This is going to be my first deep dive into this topic, so I'm pretty stoked.
- Looks like Holt is going to start us off with `npm install react-loadable`.

###### React-Loadable

- React-loadable is a functional component that accepts three things:
  1. The component we want to load.
  2. A component that it will display as our primary component loads.
  3. A component to display in the event our app runs into any errors.
- We create an instance of `loadable` from react-loadable and pass in a configuration object where we set the first key, `loader`, to a lambda function that uses the `import` keyword as a function:

The instance of `loadable`:

      const LoadableDetails = Loadable({
        loader: () => import('./Details'),
        loading() {
         return <h1>Loading Split Code..</h1>;
        }
      });

- Essentially, it's returning an import statement, but using `import` as a function. Interesting.
- Holt says that Parcel is smart enough to see this, find Details.js and bring it out for us, then he quickly moves onto explaining the next line in the config. This makes me wonder: would using `import` as a function work without Parcel? I'll have to experiment with this later.
- Moving on, the second parameter is where we would typically return a loading spinner. Looks like we're going with a simple `h1` for now.
- Lastly, we replace our `Details` component JSX tag with `LoadableDetails`, restart our dev server, open up our devTools and click over to the Network tab.
- We reload our browser and checkout the network calls. When we click into a specific animal's link, we see that the details for that animal are loaded only when that animal is selected. Nice.

###### React-Loadable Tips

- In the following Q&A video, Holt actually confirms that using `import` as a function isn't related to React. Webpack and Parcel both give us the ability to do this for lazy-loading.
- We set up two more components with react-loader: Results.js and SearchParams.js. Holt shows us that using react-loader for sections of our app that are already small would actually slow down our UX.
- **Code splitting introduces _more_ network latency, so it's important for us to code split only when our bundle gets above ~50kB in size** (after minifying and g-zipping). This would ensure that we get some overall net gains in performance to make it worth introducing more complexity to our app.
- Holt mentions the utility of **Service Workers** and how we could use them to drop our initial page loading time by loading other bundles in the background, but he isn't going to cover that in this tutorial. Looks like I'll have to track that course down as as well.

###### React.Fragment

- In older versions of React, we had to place all of our code within a top layer `div` in order for React to render our component to the browser. In React 16, we now have the ability to use `<React.Fragment>` as our top layer.
- It looks like it, but `<React.Fragment>` doesn't replace the top layer `div`. It just allows React to render whatever children are inside of it, together.
- In a future release of JSX, we'll be able to remove the `React.Fragment` keywords and simply use: `<>` as the opening parent tag and `</>` as the closing tag.
- Parcel doesn't support this just yet, so we're stuck with using `<React.Fragment>` for now.

###### Prefetching

- Holt briefly references Addy Osmani's blog and discusses the utility of Prefetching.
- To prefetch, aka "hinting", add another script tag to your index.html file with the attributes: `rel="prefetch" src="./<whatever-the-bundle-path-is>"`.
- This will check the user's browser and see if they're on a mobile device with a full battery, or if they're in a high speed network. If they fall into either category, it'll go ahead and prefetch all the bundles for them, thus improving the UX. If not, then it will ignore the prefetching and load normally.
- This is somewhat "hit and miss" since some browsers on mobile devices will automatically ignore any prefetch calls.
- If you want more granular control and not leave things to chance, it might be a good move to look into utilizing a Service Worker.
- Holt references his v3 of this course on how to split your code manually if you are curious on how to do this without using something like `react-loadable`.

## Redux

- Holt begins this section with a disclaimer that React and Redux—although commonly referenced together—are _not_ the same thing.
- If you _don't_ need to wrangle down and manage a ton of state, then **it's best to pass on including Redux in your project**. Why? Because Redux adds _a ton_ of complexity to your code. It's best used for larger, more dynamic applications.
- Essentially, Redux is a central data store for your entire repo. If managed correctly, this makes your state extremely predictable and testable.
- It's so great for testing that Holt says, _"If you're not writing tests for Redux, you're not using it properly."_
- First things first, we create the **Redux Store**.

###### The Store

- The Redux store is the central location where all of our state will reside.
- Holt has us `npm i redux redux-thunk react-redux` and then we create a `store.js` file and begin setting our store up.
- In order to properly implement the use of the Redux devTools, we add a parameter to our `compose` function that checks to see if we have Redux DevTools installed. If so, we use it. If not, we return a harmless function to let the store know that it's all good and not to throw any errors.
- We also apply `thunk` as middleware.
- In order to create a proper store, we need to pass in some reducers.

###### Reducers

- Reducers are nothing more than pure functions that:
  1.  Accepts two things: the current App state, and objects that have unique "type" properties called "actions".
  2.  Then, after it processes an action, it'll will return a new version of App state.
- Holt has us create a reducer folder in our src directory and proceeds to elaborate on the `combineReducers` function.
- To sum it up, he shows how `combineReducers()` works to stitch together segmented parts of our state object through separate reducers. Then we go into a quick explaination on what constitutes a "pure" function.
- I'm pretty familiar with Redux, so I found these explanations easy to digest.
- Side note: these deep dives into the core tools of React really help to keep my mind engaged. Many other tutorials have a focus on how the core tools of React are used, whereas Holt brings us a bit deeper into _how_ the core tools work when we use them.
- It's like learning about the concept of leverage in order to better understand how a wrench works. Sure, the efficacy of a wrench remains the same whether or not you understand leverage, but taking the time to understand how and why these tools are effective will allow us to use our tools with **intention**—which is _far better_ than simply using them as a means to an end.
- As we create more basic reducers to handle the search parameter UI, Holt is using _if/else_ statements instead of switch statements. I'm assuming that this is because switch statements would be a bit overkill for what we're dealing with.
- With all our reducers set up, we need a way to get data to flow through them. This calls for actions and action creators.

###### Actions & Action Creators

- Holt makes the point that actions and actionCreators are two different concepts, where actionCreators create our actions (duh), and these actions will pass through our reducers in order to give our app new versions of state to use.
- We make a new directory in our src folder called `actionCreators`. I find this interesting because I've named this folder simply `actions` in past projects.
- We're basically creating separate files in this folder with each file exporting a single function that returns an object with an appropriate named `type` property, then passing our user input as the value for the `payload` property. I thought this was going to be something new, but it's just business as usual.
- Holt uses the `function` keyword for this, like so:

      export default function changeAnimal(animal) {
        return {
          type: "SET_ANIMAL",
          payload: animal
        };
      }

- But I prefer using fat arrow functions for a cleaner look, like so:

      const changeAnimal = animal => ({
        type: 'SET_ANIMAL',
        payload: animal
      });

      export default changeAnimal;

- We then quickly dive into how testable these action creators are, especially when utilizing the `.toEqualSnapShot()` function. This gives your future self, or any other future developers, notice that changing the "type" will cause problems.
- Other tutorials make this point by setting all the types equal to constants of the same name, but I like this approach because it utilizes tests, which I believe to be more explicit in expressing what should and shouldn't happen.

###### Connecting Redux A Component

- In seven-and-a-half minutes, Holt connects all of our Redux infrastructure to our app.

  - First, we head over to App.js and `import { Provider as ReduxProvider } from redux`.
  - Then, we place this new `<ReduxProvider>` tag around our Context `<Provider>` tag down in the return statement below.
  - And then, we `import store from './store';` and pass it in as an attribute like so: `<ReduxProvider store={store}>`

- This particular video (Connecting to React with react-redux) could've been explained a bit better.
- Holt seems to wing it and jumps around the code while thinking out loud. He's trying to choose the best way to show us how to wire up the redux state to a particular component—and it got _pretty_ confusing.
- At this point, all the children of `<ReduxProvider>` will have the ability to access the state within the store. In order to set this up, Holt arbitrarily chooses the `<Results>` page as our example.
- In an effort to make things less complicated, he makes the decision to wire it up with state from a single reducer: location.
- Very quickly, he discusses how the `connect` function works with `mapStateToProps`, then he walks us through the flow of data to show us that it is indeed connected.
- I don't think this would be the best video for a beginner to see in order to learn Redux. That being said, this isn't a Redux course. The walkthrough near the end of the video was solid enough for me to get my head around what he just did, so all good.

###### Thunks, Dispatch & Refactoring Our App

- **Thunk** is a slang derivative of the word "think". In computer science, thunks are functions that are used to delay a calculation until a result is needed.
- **Dispatch** is a function that is given to us from the Redux library. It's always called with an action object. All it does is send that action object to our reducers.
- Redux-thunk allows us to process asynchronous data when we receive it. This means that we could write code where we treat an AJAX call just like a Javascript promise.
- When an AJAX call is made by the user and our app receives a response, redux-thunk allows us to use `dispatch()` to send an action object to all our reducers—with that response data (or part of that response data) as the payload, and whatever we want as the type.
- After Holt's discussion redux-thunk and dispatch, we refactor our App to remove all Context examples and helper functions as _all of this_ has been extracted out into Redux. We pretty much clean house.
- The only thing left to do is to wire up Results.js to read state from the other two reducers.

###### Connecting The Actions to Respond To User Input

- We enter SearchBox.js and begin slashing away.
  - We're no longer using context, so all references of `context` are replaced with `this.props`.
  - We import all our action creators with three import statements at the top of the file.
  - Then we scroll down to the bottom of the file and set up our `mapStateToProps` function in order to give this component access to all our reducers.
- Holt then walks us through making our first `mapDispatchToProps` function.
  - This is where we use the event handlers in the above UI to dispatch the appropriate our action creators with the correct user input.
- Lastly, we `connect` both `mapStateToProps` and `mapDispatchToProps` with `Search` in our `export default` statement, and that's it.

###### Wrap Up

- Holt walks us through the entire process of data flow, step-by-step, and does a great job explaining it.
- I've suffered through having to understand Redux by implementing it in a few past apps, so this all makes crystal clear sense to me. I'm sure if a complete newbie were to attempt to follow along, they may get confused because it's a lot of abstract "flow of logic" to mentally manage.
- I encourage anyone who may actually be reading this and has gotten this far to check out [Andrew Mead's](https://www.udemy.com/react-2nd-edition/?couponCode=LEARNING) and [Stephen Grider's](https://www.udemy.com/react-redux-tutorial/) tutorials for better beginner friendly explanations of redux. Those two tutorials help me understand _everything_ about redux.
- Holt then briefly shows us how to use the Redux DevTools and answers some Q&A from the audience.
- Whew, what a section. **I couldn't wait to finish this thing.** I'm looking forward to the Server Side Rendering section. I haven't messed with that before so it'll be nice to _finally_ get into some new material.

## Server-Side Rendering

- We begin this section with a small discussion on page performance.
- Holt basically shows us that under 2G network conditions, unoptimized websites show the user raw HTML and CSS while it struggles to load up our Javascript—which is basically our entire site if we're using React.
- In **Server Side Rendering**, we're going to use React in a Node environment to render our entire site as static HTML and CSS on the first request.
- This immediately presents the user with _what looks like_ a complete website, then we'll have React take over that static markup and make everything dynamic.
- The first step of this process is to create a new file called `ClientApp.js` in our `src` directory. This is where we will put all the Javascript that we aren't going to run in the server.

###### ClientApp.js

- Inside ClientApp, instead of importing `render` from React-DOM, Holt has us use React 16's `hydrate` function.
- The difference between `hydrate` and our good old friend `render` are as follows:

| hydrate                                                         | render                                                |
| --------------------------------------------------------------- | ----------------------------------------------------- |
| Looks for existing markup to take over an existing application. | This is brand new, replace everything inside of here. |

- Then, we jump into our index.html file, locate our script tag and replace `App.js` with `ClientApp.js` as the source. After that, we open up App.js and replace the `ReactDOM.render` call at the end of the file with an `export default App;` statement.
- The next step is to set up our production build process.

###### Setup Production Build Scripts

- We install `babel-cli` and `express`, then we head over to our package.json file and set up the following npm script: `"build": "parcel build --public-url ./dist/ src/index.html"`
  - **parcel build**: This step will minify our code, optimize our assets and vastly improve our app's load time.
  - **--public-url ./dist/**: This identifies where our static assets are being served from so that all of our relative paths are valid.
  - **src/index.html**: This defines our entry point, which is the same as our "dev" script.
- In order to spin up our node server, we'll make another npm script like so: `"start": "npm run build && babel-node server.js"`. As you could see, we must run our build first, then we direct babel-node to start the server up.

###### Create An Express Server

- Holt has us create a `server.js` file in our source directory and we begin laying down import statements at the top.
- This was somewhat unfamiliar, since I'm used to housing my server in it's own directory—separate from my frontend code. That's unnecessary for this app, so we'll place our server in our root directory.
- Also, we're using import statements instead of the commonly used require statements, aka: CommonJS modules. Holt addresses that we are able to do this due to the magic of babel. Nice.
- I'll explain the unfamiliar lines below, but this is our completed server.js file in it's entirety:

        import express from 'express';
        import React from 'react';
        import { renderToString } from 'react-dom/server';
        import { ServerLocation } from '@reach/router';
        import fs from 'fs';
        import App from './App';

        const PORT = process.env.PORT || 3000;

        const html = fs.readFileSync('dist/index.html').toString();
        const parts = html.split('not rendered');

        const app = express();

        app.use('/dist', express.static('dist'));
        app.use((req, res) => {
        const reactMarkup = (
            <ServerLocation url={req.url}>
            <App />
            </ServerLocation>
        );
        res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
        res.end();
        });

        console.log(`Listening on Port: ${PORT}`)
        app.listen(PORT);

* `import { renderToString } from 'react-dom/server';`
  - **renderToString** will generate the HTML from our code as a string, which we will then inject into our index.html.
* `import { ServerLocation } from "@reach/router";`
  - When server rendering, you need to wrap your app in a **ServerLocation**.
  - This enables your Routers, Links, etc. to match a location on the server where there is no history to listen to.
* `const html = fs.readFileSync('dist/index.html').toString();`
  - This will read the generated markup, with all our correct file paths and styling.
* In order to create our React Markup, we'll wrap our App in `ServerLocation` tags, like so:

        app.use((req,res) => {
          const reactMarkup = (
            <ServerLocation url={req.url}>
              <App />
            </ServerLocation>
          );

          // NOTE: These next two lines are explained below.
          res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
          res.end();
        });

* Now, we have a constant called `reactMarkup` that we need to inject into our index.html in between our `root` div tags.
* Holt shows us how to do this by placing `const parts = html.split('not rendered');` right under our `const html` statement. We split on the string `"not rendered"` because that was our initial placeholder within our root div.
* Then, we write that `res.send` statement under my `// NOTE: These next two lines are explained below` comment to finally inject the static html into our index.html.
* At this point, Holt runs his `start` script and after fixing a quick typo, everything seems to be working fine for him. Unfortunately, not for me.
* I followed the course linearly, which had me work through the Code Splitting section first. When I ran `npm run start`, my build would succeed, but the app would crash on all my code-splitting `Loadable` code.
* I'm assuming that section was moved to be earlier in the course during editing, so I had to go back and remove all Loadable-related code in both App.js and Details.js.
* After the refactor, everything worked smoothly. I disabled javascript in my devTools, refreshed the page and saw that all my code was correctly loaded as static markup, creating the illusion of a near instant initial page load. Nice.

###### renderToNodeStream

- Our little server side rendering illusion works well for our current app, but in larger apps, the time it takes for our javascript to load might be too long, causing our user to interface with the non-responsive static markup.
- In order to remedy this, Holt introduces us to React 16's `renderToNodeStream` which will stream the markup to the client as soon as it's rendered.
- I wont elaborate on the details here, but we essentially we pass in our `reactMarkup` to `renderToNodeStream`.
- As React is rendering, we pipe the `part[0]` stream into `res`. When that stream ends, we tell it not to close out, but to pipe in the second half of our app: `part[1]`.
- It's not that noticeable with this particular app because it's so small, but doing this will send all the styling and html _as soon as React renders it_, to the user—making it just a little faster.

## Preact

      Currently in progress..


## Final thoughts:

      To Be Determined.

