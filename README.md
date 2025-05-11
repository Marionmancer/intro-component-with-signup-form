# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Mobile 
  - Starting display
    ![](./screenshot-mobile.png)
  - Error display
    ![](./screenshot-mobile-error.png)

Desktop
  - Starting display
    ![](./screenshot-desktop.png)
  - Error display
    ![](./screenshot-desktop-error.png)

### Links

- Solution URL: [https://github.com/Marionmancer/intro-component-with-signup-form.git]
- Live Site URL: [https://marionmancer.github.io/intro-component-with-signup-form/]

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript for form validation

### What I learned

This project helped me improve form validation in vanilla JavaScript and better understand UX patterns around input errors. I also became more comfortable working with CSS and managing responsive layouts.

I'm proud of e-mail validation code using regex:

```js
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```
### Continued development

In the future, I would like to focus on replacing the current functions written in vanilla JavaScript with the jQuery library to simplify the code and speed up the development of interactions. This will also allow me to gain a better understanding of this popular library and its use in real-world projects.

## Author

- Frontend Mentor - [@Marionmancer](https://www.frontendmentor.io/profile/Marionmancer)
- GitHub - [@Marionmancer](https://github.com/Marionmancer)
