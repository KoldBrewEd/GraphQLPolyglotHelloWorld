# GraphQLPolyglotHelloWorld
 
## Requirements

* AWS CLI already configured with Administrator permission
* [Docker installed](https://www.docker.com/community-edition)
* [Golang](https://golang.org)
* [Node.js](https://nodejs.org/en/), including the NPM package management tool
* [Python 3](https://www.python.org/downloads/)
* [Ruby 2.7](https://www.ruby-lang.org/en/documentation/installation/)
* [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

A GraphQL AppSync API linked to 4 Lambda functions based on different runtimes will be deployed in your AWS account.

In order to test, execute the following Query from the AppSync console:

```GraphQL
query {
   getHelloWorld {
      go
      node
      python
      ruby
}
```

Due to the nature of GraphQL, you can invoke all 4 Lambda functions with a single network call and receive the results we defined in the query selection set.