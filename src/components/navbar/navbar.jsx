import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../functions/categories";
import { getStatic } from "../../functions/static";

export default function NavCategories() {
    const [categories, setCategories] = useState([]);
    const [statics, setStatics] =useState([]);

    if (!categories.length) {
        getCategory().then(categories => {setCategories(categories) ; console.log(categories)} );
    }

    // if(!statics.length){
    //     getStatic().then(pages => {setStatics(pages); console.log(pages)});
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse justify-content-end">
                <Link className="navbar-brand m-3 p-2" to={`/ `}> Ritorna alla Home </Link>
                <button className="navbar-toggler m-3 p-2" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        { 
                            categories.map(category => (
                                <li key={category.id} className="nav-item m-3 p-2">
                                    <Link to={`${category.id}`}>{ category.name }</Link>
                                </li>
                            ))
                        }

                        {/* { 
                            statics.map(stat => (
                                <li key={stat.id} className="nav-item m-3 p-2">
                                    <Link to={`${stat.id}`}>{ stat.content }</Link>
                                </li>
                            ))
                        } */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}