class Post{
    public id : string;
    public comments : string[];
    public likes : User[];
    public userPostId : string;
    public content : string;
    constructor(id: string, comments:string[], likes : User[], userPostId : string ,content : string){
        this.id = id;
        this.comments = comments;
        this.likes = likes;
        this.userPostId = userPostId;
        this.content =content;
    }
    addLike(userLike : User): void{
        if(userLike){
            this.likes.push(userLike);
        }
    }

    addComment(comment : string) : void{
        this.comments.push(comment);
    }
}



class User{
    public id : string;
    public posts : Post[];
    public followers : User[];
    constructor(id : string, posts : Post[], follower : User[]){
        this.id = id;
        this.posts = posts;
        this.followers = follower;
    }
    createPost(newPost : Post) : void{
        this.posts.push(newPost);
    }
    comment(postId : string , cmtContent : string){
        const targetPost  = this.posts.find((post) => post.id === postId);
        if(targetPost){
            targetPost.addComment(cmtContent);
        }
    }
    follow(user : User){
        this.followers.push(user);
    }

    likePost(postId : string): void {
        const postToLike = this.posts.find((post) => post.id === postId);
        if(postToLike){
            postToLike.addLike(this);
        }
    }
    viewFeed():void{
        this.followers.forEach(follower => {
            console.log(follower.posts);
        });
    }
}

class Comments{
    public id:string;
    public userId: string
    public content: string
    public replies: string[];
    constructor(id : string, userId : string, content : string, replies : string[]){
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply : string) : void{
        this.replies.push(reply);
    }
}

const newUser = new User("US001", [], []);
newUser.createPost(new Post("PT001", [], [], newUser.id, "goodd"))
newUser.createPost(new Post("PT002", [], [], newUser.id, "gooddd"))
newUser.createPost(new Post("PT003", [], [], newUser.id, "goodddd"))

