Contributing
---------------

This repo is mostly just an interface for connecting to the server. If you want to contribute to the main game code, check out the [server repo](https://github.com/Harrisandwich/brint-server)


Getting Started
---------------

```sh
# Clone the repo
git clone https://github.com/Harrisandwich/brint-client.git
cd brint-client


# Install dependencies
npm install

# create a .env file and add these vars
LOCAL_SERVER_URL=http://localhost:5000
HEROKU_SERVER_URL=https://brint-server.herokuapp.com/


# Start development live-reload server
npm run dev

# Start production server:
npm start

# To test as a global CLI app
npm run build
npm link

```

To use the heroku staging server, change `false` in the following line to `true`

`src/index.js`
```javascript
const socketUrl = false ? process.env.HEROKU_SERVER_URL : process.env.LOCAL_SERVER_URL
```

The heroku server deploys from the master branch, so all official features and functionality will be available from there

License
-------

MIT
