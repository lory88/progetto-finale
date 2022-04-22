import Static from "../models/Static";

export const getStatic = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages`) 
    .then(res => res.json())
    .then(statics => statics.map(statics => new Static(
        statics.id, 
        statics.title,
        statics.content,
        )))
}
