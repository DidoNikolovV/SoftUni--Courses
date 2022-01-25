class Story {
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes(){
        let username = this._likes[0];
        if(this._likes.length == 0){
            return `${this.title} has 0 likes`;
        } else if(this._likes.length == 1) {
            return `${username} likes this story!`;
        } else {
            return `${username} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if(this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if(username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if(!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }

        this._likes = this._likes.filter(u => u != username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let newComment = {
            Id: this._comments.length + 1,
            Username: username,
            Content: content,
            Replies: []
        }

        let currentComment = this._comments.find(c => c.Id == id);
        if(!currentComment || id == undefined) {
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        } else {
            let newReply = {
                Id: Number(`${currentComment.Id}.${currentComment.Replies.length + 1}`),
                Username: username,
                Content: content
            }
            currentComment.Replies.push(newReply);
            return "You replied successfully";
        } 
    }

    toString(sortingType){
        if(sortingType == 'asc'){
            this._comments.sort((a, b) => a.Id - b.Id && a.Replies.Id - b.Replies.Id);
        } else if(sortingType == 'desc'){
            this._comments.sort((a, b) => b.Id - a.Id && b.Replies.Id - a.Replies.Id);
        } else if(sortingType == 'username') {
            this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
        }

        return this._comments.forEach(c => c.Replies.forEach(r => r.Id));
    }
}
    

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

