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

  * Many other tutorials provide a GitHub repository to clone in which all the "magic" or modern tools that make React easier to work with, come preconfigured and ready to go. This is not one of those tutorials.
  * Holt takes the approach of showing you how React works without any tools or dependencies. Once we understand certain concepts, he'll begin to introduce the tools *as solutions* to the inconveniences that we'll face when coding in vanilla React.
  * This will help remove the sense of "magic" that many people have when diving into a preconfigured course project folder, and I believe that it also provides a huge level of context and appreciation for the most common tools that many newbie React developers, like myself, may take for granted.
  * Towards the end of the Pure React section, Holt gives his opinion on how React's self-contained, component-based approach is so much more maintainable in a production environment than an Angular-based approach.

### React Tooling

  * The very first devDependency that Holt has us install is **Prettier** , which I already have installed and configured globally on my machine. I went ahead and followed the tutorial and installed it locally to this repo, but with my preferences in the .prettierrc file.
  * Holt says, "anything that you expect people to do, write it into your scripts." 
  * So, we create a npm script for prettier formatting to ensure that the project can be properly formatted in the future.
  * He also has us create the npm script `format:check` that could be used by a continuous integration program to ensure that all code pushed into production must be properly formatted.
  * We also installed and configured **eslint**, then we set up a `npm run lint` script, again for possible future use of continuous integration.
  * I didn't know that passing in a blank `--` flag when running a npm script will allow you to add more parameters to that particular npm script. Cool stuff.
  
### Parcel

    Currently in progress..

## Final thoughts: 

   *To be determined*
