# lambda-typescript-graphql

## Prereq
1. Nodejs 8 or above (with NPM)
1. SAM
1. Docker

## To Run Locally
```bash
npm run serve
```

## GraphiQL
GraphiQL is only available when you are running the lambda function locally. Open your favorite browser with the following URL:
```
http://localhost:3000/graphql
```

## GraphQL Schema
The GraphQL Schema is hardcoded in `post.ts`

## Resolvers
Resolver(s) is/are located in the `resolvers` directory

## Unit Tests
Tests are written with Jasmine test framework and you can run it by either
```
npm run test
```
or
```
npm run test:watch
```