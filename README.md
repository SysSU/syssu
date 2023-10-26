This is a [Next.js](https://nextjs.org/) project created by Seldon to be hosted as part of SysSU.com.

- [Getting Started](#getting-started)
  - [Learn More About Next.js](#learn-more-about-nextjs)
- [Unit Tests](#unit-tests)
- [TODO:](#todo)

## Getting Started

First, run the development server:

```bash
yarn dev
``` 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Unit Tests
Unit tests are managed using Cypress component testing. To run all the tests use `yarn test`. Otherwise to run individual tests or configure Cypress you can use `yarn cypress open`.

The test files should be stored within the same location of the component that they are testing. The `cypress.conf.ts` file is located in the root of the project. All other Cypress related files will be stored in the `cypress` folder located in the root of the project.

## TODO:
- Update readme with more information
- Explain why I decided to make some of the data json data
