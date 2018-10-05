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
3. Code Splitting
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

     Currently in progress..
  
## Final thoughts: 

      To Be Determined.
