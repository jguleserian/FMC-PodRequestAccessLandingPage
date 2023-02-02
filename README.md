# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

According to Frontend Mentor, users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

However, as additional goals, I wanted to:
- Maintain a strong "division of concerns" by making the HTML take care of the content and structure, the CSS to handle the styling, and the JavaScript to handle the functionality.
- Create a confirmation page for the user so they would have the necessary feedback to know they were successful.
- Write the functionality not only with JavaScript, but also using JQuery. On this last goal, I was not as successful. My hope is that someone will review my work and help me know where I went wrong.

### Screenshot

![Screenshot at 1440px](./Screenshots/Screenshot-1440.png)
![Screenshot at 768px](./Screenshots/Screenshot-768.png)
![Screenshot at 375px](./Screenshots/Screenshot-375.png)

### Links

- Solution URL: [GitHub Reporitory](https://github.com/jguleserian/FMC-PodRequestAccessLandingPage.git)
- Live Site URL: [GitHub Pages](https://jguleserian.github.io/FMC-PodRequestAccessLandingPage/)

## My process

Since this was the first project I have done for Frontend Mentor that required JavaScript, I focused on keeping my same work flow as before, but adding the step to write the programming. In essence:
1. Project setup
  - Set up files and folders in my desired structure.
  - Analyzed the page layout and generally structured HTML sections accordingly.
  - Put all content into my index.html.
  - Set variables in styles.css, performed a reset of the page, and laid out my css organization.
  - Wrote my objectives in my index.js file and commented them out.
2. HTML: Went through the page from top to bottom and built the detailed structure.
3. CSS: Styled the page from top to bottom, and then, for each breakpoint.
4. JavaScript: wrote the JavaScript to handle the form validation and error messages.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- [JQuery] (https://jquery.com)
- Mobile-first workflow

### What I learned

Key learning points:
- Validating forms using vanilla JavaScript
- Calling new pages from JavaScript
- RegEx and validating email addresses
- I need to brush up on my JQuery

### Continued development

1. The first think I would like to improve in, as stated above, is the use of JQuery to accomplish the same goal and plain JavaScript. As I built my program in JQuery, I did so with the same methodology as I had done with JS, altering the lines of code according to JQ syntax. I really thought it would be quick and easy. However, I can't seem to get the pulled information (email address) to actually go through the validation process. I suspect it may have something to do with the way I build the event listener, or more accurately, the "submit" event. Even though I spent more time than I should have in the JQ documentation, I still was not able to get it solved. My hope is that someone who knows JQ will review this project and give me some info that will help me get it functional.
2. I want to take on my difficult projects involving JavaScript to get used to incorporating it into my web development.
3. I would like to practice making my pages more responsive. While each page looks good at the breakpoints, as I shift the size of the viewport up or down, there are times when the text partially disappears off the page.

### Useful resources

- [JQuery Website](https://jquery.com/) - The API docs here are very helpful, but I found that the learning section seemed to go out of order or assume knowledge of JQuery or advanced knowledge of JavaScript. 

## Author

- Frontend Mentor - [@jguleserian](https://www.frontendmentor.io/profile/jguleserian)
- GitHub - [@jguleserian](https://www.github/jguleserian)
- Linkedin - [@jeffguleserian](https://www.linkedin.com/jeffguleserian)
- FreeCodeCamp - [@Doctor_G](https://www.freecodecamp.org/Doctor_G)