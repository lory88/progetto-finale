export default function CategoryPost(props){

    return(
        <div className="col-md-4">
            <div className="card m-3 p-3" style={{width: "100%"}}>
            <img src={props.categoryPost.media} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.categoryPost.title.rendered}</h5>
                    <p className="card-text">{props.categoryPost.content.rendered}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

