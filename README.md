# Complete Intro to React v4

[See the course website here][v4].

This course was written for and recorded by [Frontend Masters][fem]. The code here is licensed under the Apache 2.0 license and the [course notes][v4] are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.

[v4]: https://bit.ly/react-v4
[fem]: https://frontendmasters.com/courses/react/

## Why am I taking this course?

I was following along Stephen Grider's courses for the past two weeks and as great as they are, once I saw that Brian Holt launched the fourth iteration of his React course on FrontEndMasters, I knew that I should switch things up and spend my time with a React industry leader. 

In order to have the most up to date skills, you've got to learn things as soon as the best teachers teach them.

## Notes

### Pure React

  * Many other tutorials provide a GitHub repository to clone in which all the "magic" or modern tools that make React easier to work with come preconfigured. This *is not* one of those tutorials.
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

    Currently in progress..

## Final thoughts: 

   *To be determined*
