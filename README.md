Near-Article-Ptoject
==================

The aim of my project was to create smart contracts for article writers and to keep them on the blockchain forever. I aimed that those who like the articles donate to the author. I hope it gave a good idea to the programmers as my project is open to development.

## Installation
```bash
git clone https://github.com/mehmetlevent/Near-Article-Project
```

## After cloning the project please run
```bash
yarn
```



## Building and Deploying the contract
The contract is located in under the ***contract/assembly*** folders, after editing the contract you can run

    yarn dev


after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract

***#This step is not needed if you are going to use the contract with the front-end***

    export CONTRACT=ACCOUNT_ID
where the **ACCOUNT_ID** will be returned after the contract deployment


 
**Running contract in the front-end**
Check the front-end section for instructions

# Functions
## Article 

 -  take two parameters.
 - title and description
 

**Example call:**
we create new Article
`near call $CONTRACT createArticle '{"title":"TITLE", "description":"DESCRIPTION"}' --account_id $NEAR_ACCOUNT`


## Find Article
if you know id number you can find Article
**Example call:**
near view $CONTRACT getArticle '{"id":"ID"}'


 
## Send Donation

 - if you like article you can send donation 
 
**Example call:**
`near call $CONTRACT sendDonation '{"id":INT_VALUE}' --accountId ACCOUNT.testnet --deposit 1`

 

