import { context, PersistentUnorderedMap,  u128, Context, math} from "near-sdk-as";
import { Money, AccountId, Timestamp } from "./utils";


// authors' articles here
export const articleArchive = new PersistentUnorderedMap<string, Article>("ARTICLE_ARCHIVE");


//Contract name: Article
@nearBindgen
export class Article{
    
    id: u32;
    owned_by: AccountId = Context.sender;
    creted_at: Timestamp = context.blockIndex;
    title: string;
    description: string;

    articles:Set<string>;
    amount : u128;

    constructor(owner_by: AccountId, title: string, description: string){
        this.owned_by = owner_by;
        this.title = title;
        this.description = description;

        this.articles = new Set<string>();
        this.id = math.hash32<string>(owner_by);
    }
       
    

   static addArticle (owner_by: AccountId, title: string, description: string): Article{
        let article = new Article(owner_by, title, description);

        articleArchive.set(article.id.toString(), article);
        return article;
}
    // create article and save it to the archive
    static addDonation( id:u32, amount: Money): Article{
        const article_owner = this.findArticleById(id);
        article_owner.amount = u128.add(article_owner.amount, amount);
        articleArchive.set(article_owner.id.toString(), article_owner);

        return article_owner
    }
    static findArticleById(id: u32): Article {
        return articleArchive.getSome(id.toString());
    }

}

