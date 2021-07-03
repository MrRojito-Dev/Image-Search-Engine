import React from "react";

const Imagen = (props) => {

    const { largeImageURL, likes, previewURL, tags, views } = props.image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes.toLocaleString()} Likes </p>
                    <p className="card-text">{views.toLocaleString()} Vistas </p>

                    <a href={largeImageURL} target="_blank" className="btn btn-primary bt-block">Ver imágen</a>                    
                </div>
            </div>
        </div>
    )
}

export default Imagen;