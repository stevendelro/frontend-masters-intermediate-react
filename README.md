# Complete Intro to React v4

[See the course website here][v4].

This course was written for and recorded by [Frontend Masters][fem]. The code here is licensed under the Apache 2.0 license and the [course notes][v4] are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.

[v4]: https://bit.ly/react-v4
[fem]: https://frontendmasters.com/courses/react/

## Why am I taking this course?

I was following along Stephen Grider's courses for the past two weeks and as great as they are, once I saw that Brian Holt launched the fourth iteration of his React course on FrontEndMasters, I knew that I should switch things up for a bit and spend some time with one of my all-time favorite online instructors. 

In order to have the most up to date skills, you've got to learn things as soon as the best teachers teach them.

## Notes

### Pure React

  * Many other tutorials provide a GitHub repository to clone, in which all the "magic" or modern tools that make React easier to work with come preconfigured. This *is not* one of those tutorials.
  * Holt takes the approach of showing you how React works without any tools or dependencies. Once we understand certain concepts, he'll begin to introduce the tools *as solutions* to the inconveniences that we'll face when coding with React.
  * This will help remove the sense of "magic" that many people have when diving into a preconfigured course project folder, and I believe that it also provides a deeper level of context and appreciation for common tools that many newbie React developers, like myself, may take for granted.
  * Towards the end of the this section, Holt gives his opinion on how React's self-contained, component-based approach is so much more maintainable in a production environment than an Angular-based approach.
  * He also makes it very apparent that many of his opinions are exactly that, opinions.

### React Tooling

  * The very first devDependency that Holt has us install is **Prettier**, which I already have installed and configured globally on my machine. I went ahead and followed the tutorial and installed it locally to this repo, but with my preferences in the .prettierrc file.
  * Holt says, *"anything that you expect people to do, write it into your scripts."* 
  * So, we create a npm script for prettier formatting to ensure that the project can be properly formatted in the future.
  * He also has us create the npm script `format:check` that could be used by a continuous integration program to ensure that all code pushed into production must be properly formatted.
  * We also installed and configured **eslint**, then we set up a `npm run lint` script, again for possible future use of continuous integration.
  * I didn't know that passing in a blank `--` flag when running a npm script will allow you to add more parameters to that particular npm script. Cool stuff.
  
### Parcel

  * Holt states that he still prefers Webpack for most large projects that will eventually go into production and get maintained, but understands how complicated Webpack configurations can become, so for teaching purposes he introduces **Parcel** as an alternative due to its plug-and-play nature.
  * We installed Parcel and wrote a npm script for it and had it running in the background. Meanwhile, we wrote a simple React import statement at the top of our App.js file and Parcel automatically installed it as a dependency to our package.json, then subsequently rebuilt and reloaded our app.
  * Props to Devin Govett and his work with Parcel. Seeing it work in realtime on my machine is incredible. With a single npm script, everything that needed to be configured through webpack is essentially taken care of. 
  * Holt then shows us some vscode magic where you could highlight a section of code, click the little lightbulb icon that vscode overlays on top of your highlight, then you can choose `Move to a new file` to automatically create a file with the same name as your variable and import it into the file that you just had it in. Wow. So many cool little tips and tricks in this course.
  
### JSX

  * Up until this point, we've been using the `.createElement` method from vanilla React to give some context with what's going on behind the scenes when we transition towards using JSX. It's not magic, JSX simply gets translated into the verbose React.createElement blocks that we've been using.
  * Holt dives into a great story about how prior to JSX, the React team was using a PHP variant called "XHP" for all their templating, and JSX was actually created to please the PHP developers, everyone found JSX pleasurable enough to work with and it took off from there.
  * In order to get eslint working properly, we begin to install a bunch of plugins, one of which was `eslint-plugin-jsx-a11y` where Holt explains that the eleven between the "a" and "y" is there because the word accessibility has eleven letters between "a" and "y". *Interesting.*
  * Asides like this are awesome. The small stories and anecdotes that Holt sprinkles into these lectures establishes a sense of unspoken trust between the audience and him. They seem to come off as nonchalant references, which they are, but they also subconsciously hint at Holt's experience as a seasoned developer.
  * This most likely isn't intentional, but I thought it was worth noting because these *subtle behavioral cues* can have a huge effect on the student-to-teacher "buy-in factor" which I've arbitrarily coined just now. I'm an avid online course taker and being able to trust in my instructor's experience has been *critical* for me to take his/her material seriously, which subconsciously	defines how much of my attention they will get from me and how much drive I'll ultimately have to complete the course.   
  * Looking for these subtle cues is a key life skill, folks.
  * Holt explains his recent switch from using the strict AirBnB linting rules, to the less strict "recommended" rules because—more often than not—he finds himself correcting perfectly valid code just to satisfy the linting rules, which isn't worth the concern for him at this point.
  
### Rendering Data

  * We kick off this section with a quick exposure to environment variables. We create a .env file in our root directory in order to house our API keys and secrets. We would declare this .env file in our .gitignore to prevent the key/secrets from being exposed on GitHub.
  * This would have saved me *a ton of time* in a past project where I had my API key blatantly exposed as a declared variable in my backend.  
  * Unlike most past tutorials that I've taken, Holt immediately has us creating and using a component lifecycle method, in this case it's a `componentDidMount`, which is arguably the most useful of the bunch. It's interesting to see him teach this so early on. Most other instructors don't bother to expose their students to lifecycle methods until much later in their courses.
  * The PetFinder API sends back XML, so Holt has us install and use his `petfinder-client` which he made specifically for this course, that will translate the XML into workable JSON.
  * The downside to this is that we need to have a bunch of if/else statements in our component to ensure sure that the data that we're going to manipulate is of the correct type.

### Routing

  * In the three previous iterations of this lecture, Holt taught us how to use React-Router, which is still the defacto community standard, so it was a surprise to see that he's opting to teach us something I've never heard of: **Reach Router.**  
  * We go about extracting the PetFinder logic into it's own Results file, then we created a simple Details file to prepare for some logic to display all the individual details for a specific animal.  
  * Then, Holt shows us another pretty cool vscode trick: if you begin adding a component tag to display within another component, the autocomplete feature will allow you to hit `return` and vscode *will automatically import* that component to the top of your page *with* the correct relative path. Sweet.
  * Not too long after that he dives into the React Dev tools in the browser where he shows us some useful features.
  * After this initial exposure to Reach Router, I plan on incorporating it into my next personal project. It looks interesting and I'd like to dive deeper into understanding it's capabilities.
  
### Async UI

  * This section started off somewhat slow. We begin fleshing out the Details.js page with a `componentDidMount` call that sets the appropriate data to appropriate places within out component-level state object, then we tossed up some really basic JSX to display the information to the user.
  * Holt explains that the `constructor(props){super(props)}` pattern is currently being phased-out and soon it'll be common place to have the component-level state object simply declared as a top-level class property.
  * Up until now, we've been pretty spoiled with Parcel automatically handling our babel config, so in order to implement this pattern, Holt has us install a slew of babel packages and then takes through configuring babel manually. 
  * I've actually implemented this within my Movie Finder app and prefer it. It looks clean and many other React tutorials have began teaching students React without the constructor/super calls.
  * Within the .bablerc file we set env to target the last two versions of browsers, as opposed to targeting a specific browser, so as time goes on babel would be transpiling less and less of our code. Then we added `transform-class-properties` as a plugin, headed over to our .eslintrc.json file to drop in `babel-eslint` as our parser.
  * We move on to create a Carousel component, which would display the pictures of dogs in a more UX friendly way. Holt has us use a new lifecycle method: `static getDerivedStateFromProps({ media })` which was completely new to me. 
  * The `static` keyword means that this particular function isn't concerned with mutating any state, but only with taking in some props and returning some state. 
  
  Here's a quote from MDN elaborating on the `static` keyword:
  
        "The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects."
        
  * I've got to be honest and say that I don't completely understand the utility of `static` or the `getDerivedStateFromProps` method, so I'll have do more experimenting on my own to really get a feel for it.
  * I really enjoyed learning about adding a simple `+` sign to the front of a string to coerce it into being a number. These little tricks with type management have been really insightful for me. I'm looking forward to getting into and implementing TypeScript with my future projects. I've got Kyle Simpson's courses on my course Hitlist for sure. 
  
### Forms

  * Hey guys, it's been about a week since my last push. I took a break to get some personal matters in order, but all is well now. Lets finish this course up!
  * Holt takes us through the process of making a super basic form. He intentionally creates an input with its value hardcoded within our initial state declaration. He does this in order to segue into a lecture on how two-way binding in React is *much more* difficult to implement than in Angular or Ember. 
  * I have absolutely zero Angular or Ember experience, so this is pretty normal to me. Holt goes on to explain why he enjoys this so much and how making two way binding difficult helps developers be more mindful of what is actually going on. He's even pounding on the podium and go so far as calling it a great feature. I dig it.
  * Notable Quote: *"Always, *always* err on the side of maintainability and readability. You should have performance problems first, before you solve your performance problems."*
  * All this type checking is really adding a ton of friction when it comes to dealing with choosing a breed from the Petfinder breed list. I understand that it's necessary, but it can get cumbersome to type all this repetitive code while keeping your mind actively thinking about the main objective of the current section.
  * I believe in the next course: Intermediate React, Holt will go over Typescript and I've got a hunch that writing in TypeScript will help absolve these issues. I can't wait to finish this course up and get started on that. 
  * To be completely honest, the only reason why I'm taking this Intro course is to have enough context with the project in order to take the intermediate course, which I plan on using that intermediate knowledge to optimize my portfolio.
  
### Context

##### Part 1

  * At this point in the tutorial, if we understand how data flows from parent component to child component via props and component state, then we have a pretty good grasp on React in general. From here on out, we will be diving into the more advanced parts of the framework.
  * Holt kicks off this section with his opinion on using the spread operator to automatically inject props into a component—and how doing so is a bad practice. 
  * My takeaway from this is: "when in doubt, *always take the explicit route*." It'll improve the experience of reading and understanding your code by making the flow of data easy to follow. Hearing his explanation makes me want to sift over everything in my upcoming portfolio to make everything is easy to follow. 
  * Context is universal data for your application. Holt reminds us that this can easily be abused because it bypasses the uniform "parent-to-child" data flow that's at the core of React, but for good reason. 
  * Basically, it was made to resolve the "data-tunneling" problem that occurs when passing data through multiple nested components. Because of how similar it is to Redux, we will be able to use it in its place for certain situations.
  * Wow, after implementing the Providers and Consumers from the Context API, I'm really impressed. This is so cool. I could see how it could be seen as magic, but to me it feels like the next level of utilizing the same tools that React has been having us use. 
  * At the most basic level, a component is simply a function that returns some markup. Within Context, that function will still return markup, but we pass in an object with all our goodies from far away for us to use as we please within that function's returned markup.
  * Lmao at the obligatory programmer swig of Mountain Dew during the beginning of the Context Q&A video.
  
##### Part 2

  * We get into the SearchBox component and replace all the `this` and `this.state` references with `context`. Afterwards, we jump back into SearchParams in order to set it up to render SearchBox. 
  * Now, we have the component SearchParams displaying Searchbox *without needing to pass anything through to it*. 
  * **This is the magic of Context:** It will allow you to place this SearchBox component anywhere in your app *without* needing to wire up a direct line through the component tree. 
  * The utility of this is pretty apparent, but Holt walks us through how it can create some problems when it comes to troubleshooting possible bugs. Because of the Producer and Consumer, it becomes difficult to see exactly what is happening to our data during that implicit leap.
  * Holt takes us to the Results page, imports SearchBox and simply drops it into the markup and it works flawlessly. Pretty cool. Many new libraries are taking advantage of this in big ways. Reach Router—the router that we're currently using—is using Context *everywhere*.
  * I'm really enjoying this and hope to implement it in one of my projects soon. I find that although I understand how it works conceptually, its not until I actually implement it that I get a real feel for how it fits into my development process.
  * It would've been nice for Holt to have a quick little aside on what would (and wouldn't) constitute proper use of the Context API. The example with a search box seems pretty straight forward, but it would've been nice to shed more light on some other examples to get a better idea of best practices. I'll have to dive into the official docs for more info for sure.
  * Nice, Holt sprinkles in a couple unfamiliar words for me: **reticent**, which means "not revealing one's thoughts or feelings readily" and **admonish**, which means "to warn or reprimand someone firmly." This makes me want to buy this dude a beer and give him a couple hi-fives. I could see it in your eyes Holt. You're hiding a demonic creative genius in there and you have no proper outlet for it. I could resonate with that.
  * Anyway, we go about wiring up our Results page by giving it Context and modifying the componentDidMount call into a `search()` method. This new search method will use the Context data as it's search parameters. 
  * We create a new `componentDidMount` method and call `search()` within that. Since we extracted out the logic from the lifecycle method into its own function, we're now able to wire up that logic to fire off with new parameters when the user fills out and submits the form. Clever.
  * Ahh, it looks like the Holt answers the question on when to use the Context API during the last video of this section. Basically, use it as a last resort when passing props through your components just wont suffice for your particular usage of that component. 
  * If something has to live in the parent component and must be used in two places, then suffer and use props. But, if you're using that data in many more than two places, the Context API would be a viable consideration. Again, Holt stresses that these guidelines for usage are his opinions and that he follows these guidelines because it aids readability and maintainability down the road.
 
### Portals

      Currently in progress.. 

## Final thoughts: 

   *To be determined*
