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
    * Jest
    * Make your tests fail
    * Istanbul & code coverage
    * Advice
2. CSS in JS
	* Emotion & React-Emotion
    * Tagged Template Literals
    * Is CSS in JS a good thing?
3. Code Splitting
    * React-Loadable
    * React-Loadable Tips
    * React.Fragment
    * Prefetching
4. Redux
5. Server Side Rendering
6. Preact
7. Code Organization
8. TypeScript with React

## Notes

### Testing React

###### Jest

  * We kick off this section by installing `jest` and `react-test-renderer` into our devDependencies.
  * Holt comments on Jest being Facebook's unofficial testing library, and if needed, we could reference the official Jasmine docs since Jest is primarily based off of that library.
  * Also, Holt mentions thst `react-test-renderer` was created for us to render React code through Node, which makes it much, *much* faster than rendering it to the browser.
  * Our first test is looks at our Details.js page, converts everything on it to JSON, then takes a snapshot of it using `.toMatchSnapshot()`. 
  * The first time you run this test, it will always pass. Every time thereafter it will compare the last snapshot with a current snapshot and the test will fail if any changes have been made.
  * This super basic, low complexity test works well when you need to ensure that data received from an external API call is coming in exactly as you expect.
  
###### Make your tests fail

  * Holt recommends that along with getting your tests to pass, you also want to be able to make them fail. 
  * This extra step of modifying your code to make your assertions fail *on purpose* will give you reassurance that the tests you are running are passing as you intended.
  * Jest is intelligent enough to always run the last test to fail, first. This means that Jest will run your tests out of order in order to reach a "fail" as fast as possible. To have that capability availably—out of the box—is pretty impressive.
  
###### Istanbul & code coverage

  * Jest also incorporates another library within it called "istanbul" which checks for test code coverage throughout your project. We set up a npm script with the `--coverage` flag and run it. 
  * Our console then displays a nicely color formatted chart that shows how much of our project's code is covered by tests. This is pretty cool.
  * Even cooler, when we run the coverage command, istanbul creates a **coverage** directory in your project. Within it, there's a directory named **lcov-report** and within that there's an **index.html** file. 
  * When you open that **index.html** file in your browser, it will take you to a generated report of the test code coverage for your project—complete with highlighted sections of your code to show you exactly what you need to write tests for.
  
###### Advice

  * Holt warns us to be weary of falling into the trap of constantly shooting for "100% coverage". 
  * The goal isn't to cover 100% of your code, because you could do that with terrible tests. The goal is to write *really good* tests, not simply to get 100% code coverage. 
  * The code coverage percentage as a *relative measurement* for us to gauge what areas of our code may need more attention.
  
## CSS in JS

  * I'm pretty excited for this section. The majority of my portfolio is written in Sass and I'm pretty curious on whether or not what I learn in this section would help me optimize my code.
  * Holt briefly addresses the unresolved angst that the React community has with CSS in JS.  He then assures us that he will share is personal opinion on the matter after he brings us up to speed.
  
###### Emotion & React-Emotion

  * First things first, we `npm install emotion react-emotion`. We then head over to App.js and extract out the Header logic into its own component file: NavBar.js.

  * We import the `styled` function from react-emotion, passed the string `"header"` to it and used it to create an instance of a new variable named `Container`. 
  
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
  
  * That back-tick block that you see up there in `Container` is a [Tagged Template Literal](https://www.youtube.com/watch?v=kj8HU-_P2NU).
  * This was my first exposure to it, so bear with me: from my understanding, when you call a function followed by a template literal, that function will be called with two arrays as arguments: 
    1. One array would include all the strings within that template literal, with each array item being the string value of whatever is between expressions.
    2. The second array would include all the expressions within that template literal, with each array item being the resulting value of each expression, separated by the strings.
  * In the browser, this functions just like having normal CSS applied the traditional way.
  * I'm assuming that the two arrays that result from this particular Tagged Template Literal are:
    1. An array of keys: `['background-color', 'position', 'top', 'z-index']`.
    2. An array of values: `['#333', 'sticky', 0, 10]`.
  * These two arrays are then manipulated by `react-emotion` to create the CSS we want to be applied to our Header. 
  * Because we are using Tagged Template Literals, we now have the ability to inject javascript into our CSS via expression interpolation, aka: `${ }`. Whaat. This is nuts.
  * I'm actually pretty excited now. The entire design structure of my portfolio will need to get reworked, which means I'll have a ton of real-world practice to apply what I've just learned.
  
###### Is CSS in JS a good thing?

  * Having CSS in JS can make it relatively easy for us to have our CSS interact with our component state. 
  * Holt shows us a hilarious example of this by making our spyglass emoji rotate faster and faster with every click from the user.
  * It looks like his opinion of CSS in JS is extremely positive. I like it too. Having all a component's Javascript, CSS and JSX located within one file seems much more intuitive to me than having everything abstracted away, only to be completely assembled during the build phase.
  * His opinion is roughly: having CSS in JS lets us see CSS in a different light, and innovations like this are really pushing the Javascript community forward. He then vouches for CSS modules as being a great middle-ground option between pure CSS and Emotion if you still aren't fully convinced.

## Code Splitting

  * The last section definitely left me with some cool ideas on how to revamp my portfolio, but code splitting just might be the single most effective thing for me to implement in order to ramp up my site's performance. 
  * This is going to be my first deep dive into this topic, so I'm pretty stoked.
  * Looks like Holt is going to start us off with `npm install react-loadable`.

###### React-Loadable

  * React-loadable is a functional component that accepts three things: 
    1. The component we want to load. 
    2. A component that it will display as our primary component loads.
    3. A component to display in the event our app runs into any errors.
  * We create an instance of `loadable` from react-loadable and pass in a configuration object where we set the first key, `loader`, to a lambda function that uses the  `import` keyword as a function: 

The instance of `loadable`:

      const LoadableDetails = Loadable({
        loader: () => import('./Details'),
        loading() {
         return <h1>Loading Split Code..</h1>;
        }
      });
 * Essentially, it's returning an import statement, but using `import` as a function. Interesting.  
 * Holt says that Parcel is smart enough to see this, find Details.js and bring it out for us, then he quickly moves onto explaining the next line in the config. This makes me wonder: would using `import` as a function work without Parcel? I'll have to experiment with this later.
 * Moving on, the second parameter is where we would typically return a loading spinner. Looks like we're going with a simple `h1` for now.
 * Lastly, we replace our `Details` component JSX tag with `LoadableDetails`, restart our dev server, open up our devTools and click over to the Network tab.
 * We reload our browser and checkout the network calls. When we click into a specific animal's link, we see that the details for that animal are loaded only when that animal is selected. Nice. 
 
###### React-Loadable Tips

 * In the following Q&A video, Holt actually confirms that using `import` as a function isn't related to React. Webpack and Parcel both give us the ability to do this for lazy-loading.
 * We set up two more components with react-loader: Results.js and SearchParams.js. Holt shows us that using react-loader for sections of our app that are already small would actually slow down our UX. 
 * **Code splitting introduces *more* network latency, so it's important for us to code split only when our bundle gets above ~50kB in size** (after minifying and g-zipping). This would ensure that we get some overall net gains in performance to make it worth introducing more complexity to our app.
 * Holt mentions the utility of **Service Workers** and how we could use them to drop our initial page loading time by loading other bundles in the background, but he isn't going to cover that in this tutorial. Looks like I'll have to track that course down as as well. 
 
###### React.Fragment 

 * In older versions of React, we had to place all of our code within a top layer `div` in order for React to render our component to the browser. In React 16, we now have the ability to use `<React.Fragment>` as our top layer.
 * It looks like it, but `<React.Fragment>` doesn't replace the top layer `div`. It just allows React to render whatever children are inside of it, together.
 * In a future release of JSX, we'll be able to remove the `React.Fragment` keywords and simply use: `<>` as the opening parent tag and `</>` as the closing tag.
 * Parcel doesn't support this just yet, so we're stuck with using `<React.Fragment>` for now.
 
###### Prefetching

 * Holt briefly references Addy Osmani's blog and discusses the utility of Prefetching.
 * To prefetch, aka "hinting", add another script tag to your index.html file with the attributes: `rel="prefetch" src="./<whatever-the-bundle-path-is>"`. 
 * This will check the user's browser and see if they're on a mobile device with a full battery, or if they're in a high speed network. If they fall into either category, it'll go ahead and prefetch all the bundles for them, thus improving the UX. If not, then it will ignore the prefetching and load normally. 
 * This is somewhat "hit and miss" since some browsers on mobile devices will automatically ignore any prefetch calls.
 * If you want more granular control and not leave things to chance, it might be a good move to look into utilizing a Service Worker.
 * Holt references his v3 of this course on how to split your code manually if you are curious on how to do this without using something like `react-loadable`.
 
## Redux

      Currently in progress..
  
## Final thoughts: 

      To Be Determined.
