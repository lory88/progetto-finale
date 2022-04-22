import { getPosts } from "../../functions/posts";
import { useState } from "react";  
import PostItem from "../post-item/PostItem";


export default function PostList(){

    const [hasLoadedPosts, setHasLoadedPosts] = useState(false); 
    const [posts, setPosts] = useState([]);

    if(!hasLoadedPosts){
        getPosts().then(posts => {setPosts(posts); console.log(posts); setHasLoadedPosts(true)});
    }

    const postCard = posts.map(post => <PostItem key={post.id} post ={post}/>) 

    return(
        <div className="container">
            <div className="row">
                {postCard}
            </div>
        </div>

    )
}