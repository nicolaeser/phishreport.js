# PhishReport JavaScript Client

The PhishReport JavaScript Client is a simple library for interacting with the PhishReport API. It provides methods for creating cases, retrieving case information, and getting domain information. This library is designed to help you integrate PhishReport functionality into your JavaScript applications.

## Installation

You can install the PhishReport JavaScript Client using npm:

```bash
npm install phishreport.js
```

## Usage
To use the PhishReport JavaScript Client, first import the library and create an instance with your API token.
```js
const {Client} = require("phishreport.js");

const apiToken = "YOUR_API_TOKEN";
const client = new Client(apiToken);
```

## Creating a Case
To create a case in PhishReport, you can use the createCase method. Provide the URL of the suspected phishing page as a parameter.

```js 
const case = await client.createCase("https://example.com/phishing-page");

if (case) {
  console.log("Case created successfully:", case);
} else {
  console.error("Error creating the case.");
}
```

## Retrieving Case Information
You can use the getCase method to retrieve information about a specific case. Provide the case ID as a parameter.

```js
const caseInfo = await client.getCase("CASE_ID");

if (caseInfo) {
  console.log("Case information:", caseInfo);
} else {
  console.error("Error retrieving case information.");
}
```

## Getting Domain Information
To obtain information about a hosting domain, you can use the getInfo method. Provide the domain as a parameter.

```js
const domainInfo = await client.getInfo("example.com");

if (domainInfo) {
  console.log("Domain information:", domainInfo);
} else {
  console.error("Error getting domain information.");
}
```
## Error Handling
This library includes basic error handling. If there are any errors in the API requests, they will be logged to the console. Besides, the request will give you `null`.
