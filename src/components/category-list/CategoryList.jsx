import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPostId } from "../../functions/posts";
import CategoryPost from "../category-post/CategoryPost";

export default function CategoryList(){
    const {categoryId} = useParams();

    const [categoriesPost, setCategoriesPost] = useState([]);

    useEffect(() => {
        getPostId(categoryId).then(posts => {setCategoriesPost(posts) ; console.log(posts)} );
    }, [categoryId]);
    
    const postCat = categoriesPost.map(categoryPost => <CategoryPost key={categoryPost.id} categoryPost={categoryPost}/>) 

    return(
        <div className="container">
            <div className="row">
                {postCat}
            </div>
        </div>
    )
}