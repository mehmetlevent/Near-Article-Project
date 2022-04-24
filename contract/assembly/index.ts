
import { Article,  articleArchive } from "./model";
import {Context } from "near-sdk-core";



// near call $CONTRACT createArticle '{"title":"TITLE", "description":"DESCRIPTION"}' --accountId ACCOUNT.testnet
// create Article
export function createArticle(title: string, description: string):Article {
  return Article.addArticle(Context.sender, title, description);
}


// near call $CONTRACT sendDonation '{"id":INT_VALUE}' --accountId ACCOUNT.testnet --deposit 1
// donation to Article 
export function sendDonation(id: u32): Article {
  return Article.addDonation(id, Context.attachedDeposit);
}

// near view $CONTRACT getArticle '{"id":"ID"}'
// find Article by id
export function getArticle(id: string): Article | null {
  return articleArchive.get(id);
}