import Post from "../models/Posts";

export const getPosts = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/posts?media&_embed`) 
    .then(res => res.json())
    .then(posts => posts.map(post => new Post(
        post.id, 
        post.title,
        post.content,
        post.author, 
        post.categories,
        post._embedded['wp:featuredmedia'][0].source_url
        )))
}

export const getPostId = (catId) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/posts?categories=${catId+"&media&_embed"}`) 
    .then(res => res.json())
    .then(posts => posts.map(post => new Post(
        post.id, 
        post.title,
        post.content,
        post.author, 
        post.categories,
        post._embedded['wp:featuredmedia'][0].source_url
    )))
}