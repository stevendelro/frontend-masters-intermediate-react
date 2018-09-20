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

  * Up until this point, we've been using the createElement method from vanilla React to give some context with what's going on behind the scenes when we transition towards using JSX. It's not magic, JSX simply gets translated into the verbose React.createElement blocks that we've been using.
  * Holt dives into a great story about how prior to JSX, the React team was using a PHP variant called "XHP" for all their templating, and JSX was actually created to please the PHP developers, everyone found JSX pleasurable enough to work with and it took off from there.
  * In order to get eslint working properly, we begin to install a bunch of plugins, one of which was `eslint-plugin-jsx-a11y` where Holt explains that the eleven between the "a" and "y" is there because the word accessibility has eleven letters between "a" and "y". *Interesting.*
  * Asides like this are awesome. The small stories and anecdotes that Holt sprinkles into these lectures establishes a sense of unspoken trust between the audience and him. They seem to come off as nonchalant references, which they are, but they also subconsciously hint at Holt's experience as a seasoned developer.
  * This most likely isn't intentional, but I thought it was worth noting because these *subtle behavioral cues* can have a huge effect on the student-to-teacher "buy-in factor" which I've arbitrarily coined just now. I'm an avid online course taker and being able to trust in my instructor's experience has been *critical* for me to take his/her material seriously, which subconsciously	defines how much of my attention they will get from me and how much drive I'll ultimately have to complete the course.   
  * Looking for these subtle cues = key life skill, folks.
  * Holt explains his recent switch from using the strict AirBnB linting rules, to the less strict "recommended" rules because—more often than not—he finds himself correcting perfectly valid code just to satisfy the linting rules, which isn't worth the concern for him at this point.
  
### Rendering Data

    Currently in progress..

## Final thoughts: 

   *To be determined*
