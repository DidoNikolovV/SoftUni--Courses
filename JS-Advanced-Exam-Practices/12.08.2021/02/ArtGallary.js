class ArtGallery{
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if(this.possibleArticles[articleModel] === undefined) {
            throw new Error("This article model is not included in this gallery!");
        }

        let foundedArticle = this.listOfArticles.find(a => a.articleName == articleName && a.articleModel == articleModel);
        if(foundedArticle) {
            foundedArticle.quantity += quantity;
        } else {
            let newArticle = {
                articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(newArticle);
        }
            

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }


    inviteGuest(guestName, personality){
        this.guests.forEach(g => {
            if(g.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        })

        let personalities = {
            "Vip": 500,
            "Middle": 250
        }

        let points = personalities[personality] == undefined ? 50 : personalities[personality];

        let guest = {
            guestName,
            points,
            purchaseArticle: 0
        }

        this.guests.push(guest)
        return  `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        let currentArticle = this.listOfArticles.find(a => a.articleModel === articleModel && a.articleName == articleName);
        let currentGuest = this.guests.find(g => g.guestName == guestName);
        if(!currentArticle) {
            throw new Error('This article is not found.')
        }

        if(currentArticle.quantity == 0) {
            return `The ${currentArticle.articleName} is not available.`
        }

        if(!currentGuest) {
            return 'This guest is not invited.'
        }

        let requiredPoints = this.possibleArticles[articleModel];
        if(currentGuest.points < requiredPoints) {
            return 'You need to more points to purchase the article.';
        } else {
            currentGuest.points -= requiredPoints;
            currentArticle.quantity--;
            currentGuest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${requiredPoints} points.`
    }

    showGalleryInfo(criteria) {
        let articleInformation = ["Articles information:"];
        let guestInformation = ["Guests information:"]
        if(criteria == 'article') {
            this.listOfArticles.forEach(a => articleInformation.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
            return articleInformation.join("\n");
        }

        if(criteria == 'guest') {
            this.guests.forEach(g => guestInformation.push(`${g.guestName} - ${g.purchaseArticle}`));
            return guestInformation.join("\n");
        }
    }

      
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

