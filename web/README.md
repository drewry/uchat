# README #

**Live Demo**: http://secure-badlands-5865.herokuapp.com/

Prerequisites
-------------

- [MongoDB](http://www.mongodb.org/downloads)
-- was easier for me to install via [homebrew](http://brew.sh)
- [Node.js](http://nodejs.org)
- Command Line Tools
 - **Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - [Heroku Toolbelt for MacOS](https://devcenter.heroku.com/articles/getting-started-with-nodejs#prerequisites)


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
https://bitbucket.org/u-chat/u-chat-v1/overview

# change dir
cd {wherever you put this} uchat

# Install NPM dependencies
npm install

# start mongo db
mongod

# start node app
nodemon server.js
```

Credentials
---------------
### [Beamly API](https://develop.beamly.com/apis/guide/epg)
- un: hello@covello.co
- pw: uverseuchat
#### Header Values
- zeebox-app-id: 31c74d87
- zeebox-app-key: 7d1cd062eb54c76cb0d26f0c2fc0bc94
#### [API Postman Examples](https://www.getpostman.com/collections/d0686ea29887ea4b9e8c)

### [MongoLab and DB User](https://mongolab.com/)
- un: covello
- pw: covelloAdmin1 

### [Heroku](https://dashboard.heroku.com/)
- un: hello@covello.co
- pw: covelloAdmin1 

TODO
---------------
### Dishank Patel:
- Implement [Twitter Client](https://github.com/ttezel/twit)
- Create and Implement Beamly JS Client. [Details](https://develop.beamly.com/apis/guide/epg)