"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    id;
    comments;
    likes;
    userPostId;
    content;
    constructor(id, comments, likes, userPostId, content) {
        this.id = id;
        this.comments = comments;
        this.likes = likes;
        this.userPostId = userPostId;
        this.content = content;
    }
    addLike(userLike) {
        if (userLike) {
            this.likes.push(userLike);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    id;
    posts;
    followers;
    constructor(id, posts, follower) {
        this.id = id;
        this.posts = posts;
        this.followers = follower;
    }
    createPost(newPost) {
        this.posts.push(newPost);
    }
    comment(postId, cmtContent) {
        const targetPost = this.posts.find((post) => post.id === postId);
        if (targetPost) {
            targetPost.addComment(cmtContent);
        }
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(postId) {
        const postToLike = this.posts.find((post) => post.id === postId);
        if (postToLike) {
            postToLike.addLike(this);
        }
    }
    viewFeed() {
        this.followers.forEach(follower => {
            console.log(follower.posts);
        });
    }
}
class Comments {
    id;
    userId;
    content;
    replies;
    constructor(id, userId, content, replies) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
const newUser = new User("US001", [], []);
newUser.createPost(new Post("PT001", [], [], newUser.id, "goodd"));
newUser.createPost(new Post("PT002", [], [], newUser.id, "gooddd"));
newUser.createPost(new Post("PT003", [], [], newUser.id, "goodddd"));
//# sourceMappingURL=PTIT_CNTT1_IT104_Session07_Bai9.js.map