# Big Bang game
![game screenshots on different screens](/assets/images/responsive-two.png)
## Welcome to Project 2
This is my second website for my Code Institute Full stack developer course. [Click here to access deployed game](https://nomeski80.github.io/big-bang-game/) I have decided to create a simple interactive game from the CI options of 'rock-paper-scissor-lizard-spock. The game is a game of chance the the idea taken from the TV series The Big Bang Theory. According the the bigbangtheory.fandom webpage, the game was originally created by Sam Kass.

The game has 5 options and the player plays against the computer by selecting on of the buttons. The game will then randomly select its own option and then compare it with the player's choice. Then depending on the result it will say who wins. There is a score counter for both the user and the computer.
## Homepage

![game main page](/assets/images/homepage-two.png)
## rules
I researched the rules of the game from the [Big Bang Theory wiki page](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock) 
ROCK crushes LIZARD; Rock crushes SCISSORS
PAPER covers ROCK; PAPER disproves SPOCK
SCISSORS cuts PAPER; SCISSORS decapitates LIZARD
LIZARD eats PAPER; LIZARD poisons SPOCK
SPOCK vaporizes ROCK; SPOCK smashes SCISSORS


## User stories
 This is a simple game of chance where player get to try their luck against the computer. It is a step up from the traditional game of rock, paper, scissors.  But with a couple of extra elements. As the user you have to select an image and see if your choce can beat the computer's randomly generated choce. There is a scoring system to you can continue as long as you wish. 

# Design

## Colour scheme

I decided on my colour scheme by picking a colour pallet from [coolors](https://coolors.co/) This helped me to create a simple palatte that would be consistent throughout the site.

## Typography
To create a clean and consistent look, I selected 2 fonts from [Google fonts](https://fonts.google.com/) . I picked Quicksand as I felt it was clear and easy to read. I also added a backup font of sans-serif to make sure text would be comapatible on all devices. 

## Imagery
All of my images were selected from Google. The options buttons were taken from[the noun project](https://thenounproject.com/search/icons/?q=big+bang+theory)
The image to explain the rules of the game came from 
[Big Bang theory wiki page](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

## Wire frames
When planning out the site I used a mixture of [Google slides](https://bit.ly/3PIdccC) and Balsamiq to map out how I wanted to lay out my game. I did a little research on other people's games that were similer but I addapted these to make it my own. 

![orignal plan for the game created on Balsamiq](/assets/images/pc-plan.png) ![original plan for the mobile](/assets/images/mobile-plan.png)

## General features
Simple easy to view options for the player to select. A results and score selection to keep track of your score. I have made the page responsive to adjust screen sizes. The options scale down from. There is also a button to reveal and hide the rules of the game.


## Accessability 
I have added descriptions of all images to support with screen readers. 

# Technologies Used
HTML, CSS , JavaScript, Codeanywhere, Github, Dev tools, cloudconvert.com to convert my images to webp and Favicon.io. 


## Validator testing
All checks have been completed with zero errors but several warnings with JavaScript. The lighthouse checked came up with 100 accessablility and 96 for the performance. ![css checker results](/assets/images/css-check.png) ![html checker results](/assets/images/html-check.png) ![JavaScript checker results](/assets/images/js-check.png)


## Manual testing
**Feature**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
home page loads as expected on desktop and mobile|page to game to load and be functional on both larger and smaller screens|opened site|webpage opened as expected|pass 
rules for the game extends as expected on desktop and mobile|Rules to pop open and close when the button is clicked|checked with dev tools on both pc and mobile screens|rules are clear and do appear on the second click|pass
game icons adjust as expected to make them visable on both  desktop and mobile|options for the game to change from a row to a block to make them easier to view on a small screen|checked with dev tools on both pc and mobile screens|icon buttons do adjust .|pass
lighthouse checks on both desktop and mobile for all three pages|over 90 score on lighthouse check|lighthouse scan in dev tools|96% performance|pass
w3c css validator|no errors or warnings|W3C CSS vlidation checker|no errors found|pass
nu HTML validator|no erroes or warnings|Nu HTML checker|no errors or warnings found|pass
JSHint|no errors or warnings|JSHint.com|no errrors but 19 warnings|pass
favicon|logo to appear on tab|view tab|icon can clearly be seen|pass
players score increases |players score will start at 0 and count up in increments of 1.|played game|score increased as expected|pass
computers score to increase when the computer wins|computers scire will start at 0 and count up in increments of 1.|played game|score increased as expected|pass
Computer selects a random choice|different choices are selected by the computer at rendom|played game|computer had a wide range of selected choices|pass
display who won the round, player or computer|display of winner|played game|display does show however not very clearly|pass
## bugs
The font link was not working for most of my project unless I added the link to html. However, I changed the type of font and tried to add that to css and it appeared to work then. I had a problem to connect my playGame function, I was not calling the function from anywhere. I needed to go back to the html and add onclick="playGame('lizard')" to all the choices. I used tutor support to help me. There was a problem to get the computerChoice to work, turned out to be a typo in the HTML. So once fixed, it is now functional. The Rules of the game were not keeping in the middle of the page but ater reviewing how to use flexbox again I remembered how to solve this. I also wanted the rules to be hidden unless the rules button is pushed. The advice from [w3schools](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) not working. I contacted the tutoring service and they explained that I needed to keep my functions separate so they could be read by the browser. I moved the function to sit below the playGame function and now it works smoothly.

For a while I would only win or tie never lose… it turns out I had used a comma between the option and had forgotted to use the || symbols for or. Once this was added, the program would work through the options and then it would show if th eplayer had lost a round. 
The footer was floating up the page. I needed to use position absolute and index z to keep it at the bottom. Solution came from shecodes.io

## unfixed bugs
I am still not very happy with the responsiveness of the page. I think there should be a simpler and more efficiant way to do this but it seems to work for now. 

## Deployment
The project was deployed to GitHub Pages using the following steps...

Log in to GitHub and locate [The Big Bang Game repository](https://nomeski80.github.io/big-bang-game/)
Look for the "Settings" Button on the menu at the top of the page.
Within the Settings page, scroll down until you find the "GitHub Pages" Section.
Under "Source", click the dropdown called "None" and select "Main Branch" and save.
The page will automatically refresh.
To locate the now published site link in the "GitHub Pages" section, Scroll back down through the page.
The site has now been deployed.

## Forking the GitHub Repository
To make a copy of this repository to edit and view yourself without affecting the original repository, you can use fork the GitHub Repository 

Log in to GitHub and locate [The Big Bang Game repository](https://nomeski80.github.io/big-bang-game/)
Look for the "Settings" Button on the menu at the top of the page.
This should create a copy of the original repository in your own GitHub account.

## Making a Local Clone
Log in to GitHub and locate the[The Big Bang Game repository](https://nomeski80.github.io/big-bang-game/)
Look for the "Settings" Button on the menu at the top of the page.
Click "Clone or download", found under the repository name.
To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
Open Git Bash
You can change the current working directory to the location where you want the cloned directory to be made.
Type git clone, and then paste the URL you previously copied.
 

## Credits

The button images came from [the noun project](https://thenounproject.com/search/icons/?q=big+bang+theory)


Structure for this README doc was taken from [readme-examples](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md#user-experience-ux)
and the [Code insitiute example](https://github.com/Code-Institute-Solutions/SampleREADME)

All art work and images have come from the noun project. 


## What went well, and what I'm still not happy with
I found this project very challanging. I would have liked to have had more time to practice with other JavaScript mini projects and tutorials to help me feel more confident in my understanding of functions, variales and eventlisteners. I was very grateful for the support from my mentor and the tutors. However, I tried to add an eventListener for the mouse clicker into JavaScript but I couldn't get it to work in time. I understand it would be better to have these functions running through JavaScript rather than html but I ran out of time. I also feel that with more time and confidence, I'll become more efficant with making the screens more responsive by using less code and less repition. 

