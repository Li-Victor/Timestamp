# Timestamp-Microservice

Users can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2017).

If it does, it returns both the Unix timestamp and the natural language form of that date.

If it does not contain a date or Unix timestamp, it returns null for those properties

Made with Express.js . Testing done with [**Mocha**](https://mochajs.org/) and [**Chai**](http://chaijs.com/).

## Installation
First you would need NodeJS and run in the terminal:

`npm install` and then `npm start`.

## Tests
Testing done with the command `npm test`.
