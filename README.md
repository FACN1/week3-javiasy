# week3-javiasy

## User stories:
- Want to be able to visit the site and quickly get information on the actors that play the book characters in the TV show.
- A user wants to read on mobile, tablet or desktop.
- A user wants to immediately see what the site is about - headline
- A user wants to navigate the site using a screen reader that reads out the content of the site
- Wants to be able to use the site without waiting for page loading times (async / parallel functions)

## Site design
![mobile-design](https://raw.githubusercontent.com/FACN1/week3-javiasy/49d52c96fa851757f09478e162220ebbe25f91d1/designs/android-mobile-ui.png)

## Architecture

##### File structure:
- index.html
- main.js
- style.css
- tests/
    - tests.js
    - spec.html
    - fixtures/
        - MockData.js

##### Module structure:
- ListenerModule
    - event listeners
- APIRequestModule
    - make API requests here
- ExtractDataModule
    - pseudo-code: var extractData {gameOfThrones: functions, movieDatabase: functions}
- CallbackModule
    - functions that link the different makeRequest calls together
- RenderDOMModule
    - render the data as elements on the DOM

##### HTML structure:

Have three sections, header, main and section.

Header holds the static landing page, just title and info explaining the site.

Main holds the book list, with event listeners on each book.

Section holds the character list. This is unpopulated until a user clicks on a book, at which point API requests are made and the list is populated.This will either go below the book list or code use display:none and then have it appear after clicking the book.

#### To do list for Wednesday:

First lets do #19

And then we can do the render functions #21

And then we can implement everything.

#### A bit of psuedo code:
click the book button:

- make request to GOT API for character

- list request FUNCTION

 - get list of main characters   EXTRACT DATA FUNCTION


- go through each character:  EXTRACT DATA FUNCTION

  - make new request to GOT API to get
   actor MAKE REQUEST FUNCTION

  - get actor  EXTRACT DATA

  - make a request to DB to get link to page (and image) MAKEREQUEST

  - get link EXTRACT

  - RENDER
     - render a li element with the character/actor/link
     - append li to a ul

- RENDER
- replace old ul with new ul
- scroll page down to ul
