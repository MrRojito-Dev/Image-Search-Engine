import React from "react";

const Imagen = (props) => {

    const { type, largeImageURL, likes, previewURL, tags, views } = props.image;

    const imgType = type.replace("photo", "Foto").replace("illustration", "Ilustración").replace("vector/svg", "Vector")

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-primary mb-3">  
                <img src={previewURL} alt={tags} className="card-img-top" />
                <span className="badge bg-primary">{imgType}</span>
                <div className="card-body">
                    <p className="card-text">{likes.toLocaleString()} Likes </p>
                    <p className="card-text">{views.toLocaleString()} Vistas </p>

                    <a href={largeImageURL} target="_blank" rel="noreferrer" className="btn btn-primary bt-block">Ver imágen</a>                    
                </div>
            </div>
        </div>
    )
}

export default Imagen;