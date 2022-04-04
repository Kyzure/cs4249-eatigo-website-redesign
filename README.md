# CS4249 Eatigo Website Redesign
This is a redeisgn of the Eatigo website application made for the NUS module CS4249

## Links
GitHub URL: https://github.com/Kyzure/cs4249-eatigo-website-redesign

GitHub Pages URL: https://kyzure.github.io/cs4249-eatigo-website-redesign/#/home?breadcrumbs=true&filters=true&resetsize=large&searchbar=true

For different arrangement of the website, please edit the query string to be either true or false (E.g. breadcrumbs=false), or resetsize to be large, medium or small.

## Directories and Files

### src (Root folder)
The folder that is used to keep all the other folders and certain files.

App.js - Root file that contains the themes and routes to the relevant pages

### Assets
The folder that is used to keep all the necessary images that is use to replicate or redesign the Eatigo website

### Components
The folder that is used to keep various re-usable (but might not be re-used) components that are in a page.

There are various files here, so here are some examples:
BreadCrumbs.js - Contains the breadcrumb feature that might be used in some arrangement
Header.js - Contains the header feature used in every page
SearchBar.js - Contains the searchbar feature that might be used in some arrangement.

### Pages
The folder the contains the various pages.

There are 3 main pages that are used to make the website (Don't count About.js)
Home.js - The main home page of the redesigned website for the user to search
Result.js - The result page after the user searches for a particular product
Food.js -  The page that contains the food after the user selects the product

### Styles
The folder containg the SASS or CSS files that styles the elements

## How to Install :
1. Go to main branch
2. Download nvm + npm + node (or whatever that is needed)
3. Clone repository `git clone https://github.com/Kyzure/cs4249-eatigo-website-redesign.git`
5. Open command prompt and go to directory you cloen repository
4. Create new branch (Unless u wanna push to main lmao) `git checkout -b your-branch-name`
5. Run the command: `npm install` (idk if this works)

## How to Edit:
1. Run the command: `npm start` (to start locally at localhost 3000)
2. "Edit the code and see changes"
3. Push to your branch and do merge request (or push to main if u got balls): `git push your-branch-name`
4. Change branch to main: `git checkout main`
5. Run the command: `npm run deploy`(Pushes the changes to deployment, or the github pages)
6. Change back to your branch: `git checkout your-branch-name`
