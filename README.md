# :octocat: Github Search 🔍

A simple github search.

## 🗂️ Table of Contents

1. [Getting Started](#🎉-getting-started)
   1. [Prerequisites](#💾-prerequisite-software)
   1. [Running Locally](#🏃-running-locally)
1. [Creating Stories](#📝-creating-stories)
1. [Storybook & Chromatic](#📚-storybook-&-chromatic)

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
