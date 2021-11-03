# :octocat: Github Search 🔍

## Description

A simple albiet _slightly_ overengineered Github repository search created using technologies and practices that will scale incredibly well as the application grows.

### 💻 Technologies Used

> I chose React Query since I have never used it and had an interest in learning it.

- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Theme-UI](https://theme-ui.com/) - for styled-system themeing and very simple components
- [Storybook](https://storybook.js.org/) - for UI development
- [Chromatic](https://www.chromatic.com/) - for UI tests
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - for Unit & UX tests
- [React Query](https://react-query.tanstack.com/) - for data fetching
- [RxJS](https://rxjs.dev/) - for shared state managment
- [Mock Service Worker](https://mswjs.io/) - for endpoint mocking (_NOTE: this is currently not working in storybook_, [see issues](#🐛-known-issue))
- [GraphQL CodeGen](https://www.graphql-code-generator.com/) - for generating up to date queries, react-query hooks, and types from the GitHub API schema
- [React Hot Toast](https://react-hot-toast.com/) - for error notifications

## 🗂️ Table of Contents

1. [Getting Started](#🎉-getting-started)
   1. [Prerequisites](#💾-prerequisite-software)
   1. [Running Locally](#🏃-running-locally)
1. [Creating Stories](#📝-creating-stories)
1. [Storybook & Chromatic](#📚-storybook-&-chromatic)
1. [Known Issues](#🐛-known-issues)

## 🎉 Getting Started

### 💾 Prerequisites

- [Node LTS](https://nodejs.org/dist/v16.13.0/node-v16.13.0.pkg)
- [Yarn Classic](https://classic.yarnpkg.com/en/docs/install#mac-stable)
- You will need a Github personal access token, create one [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (_You can use the recommended scopes listed [here](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) when creating your PAT._)
- Once you have the PAT, create a `<root>/.env` file which should contain `REACT_APP_GITHUB_KEY="<your_personal_access_token>"`

### 🏃 Running Locally

1. `yarn` to install dependencies.
2. `yarn gen` to generate graphql queries.
3. `yarn start` to run the application.

### 📚 Storybook

- To run storybook locally, simply run `yarn storybook`.
- To view the application's Chromatic instance, visit [here](https://www.chromatic.com/builds?appId=618068b3a4c14b003a93882c).
- To view the deployed Storybook, visit [here](https://618068b3a4c14b003a93882c-anbeaimxwc.chromatic.com).

### 🐛 Known Issues

- Mock Service Worker is unable to intercept the storybook endpoints. As such, many states that should be represented in stories have not been created. I have opened an issue with MSW and will fix this as soon as possible.
- CodeGen is generating very weak types for the `GetRepos` query, as well as not generating individual types for the returned object properties.
- Tests and valuable story states are lacking a bit. Once MSW is correctly intecepting queries, this will be easy to rectify.
