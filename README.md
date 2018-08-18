# Express React Starter

When I first started building React applications I needed a good starting point to get up and running quickly. I chose to use [React Slingshot](https://github.com/coryhouse/react-slingshot), by Cory House.
Later, I found a need to deploy my React applications with a Node backend so I modified the React Slingshot starter application to meet those needs. If you would rather just host static files then this starter may not be for you.



## Required Tools

1. Node/npm - https://nodejs.org/en/  (make sure you are using version 8 or higher)

## Setup Instructions

***If you encounter issues running jest on MacOS, then you may need to install watchman:**

  -  From terminal `brew install watchman` (assuming you have homebrew installed)

Then:

1. clone repository to local machine

1. run `npm install` in the project folder

1. run `npm run setup`
    * This will create a .env file where you will need to update the environment variables necessary for local development
    
1. run `npm run dev`  
    * This app should run on port 3001.
    
## Debugging in Webstorm

- Add a node run configuration with the following:
  * Node Parameters: -r babel-register   (add  -r dotenv/config if you want to pull dotenv out of the codebase)
  * Javascript File: src/server/index.js
  * Node interpreter: 8.9.4 (it should pick this up from the project settings)

## Tips

1. Enable Node Core library in Webstorm for better syntax highlighting. Preferences -> Languages & Frameworks -> Node.js & NPM -> Enable Node.js Core Library  

2. To get Webstorm to recognize Jest syntax go to Preferences for Javascript -> Libraries and download jest-DefinitelyTyped. This can be done for other libraries such as Enzyme as well. 

3. Use [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to inspect your components, view their states/props, and more!

4. Check out [Redux Developer Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
