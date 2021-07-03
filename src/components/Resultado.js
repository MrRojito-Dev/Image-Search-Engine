import React, { Component } from "react";
import Imagen from "./Imagen.js";
import Paginacion from "./Paginacion.js";

class Resultado extends Component {
    showImages = () => {

        const images = this.props.images;
        const term = this.props.term;

        if (term.length === 0) return (
            <React.Fragment>
                <p className="text-secondary">¡Empieza a buscar entre miles de Imágenes ahora!</p>
            </React.Fragment>
        );

        if (images.length === 0 && term.length !== 0) return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    <p> No encontramos nada...</p>
                </div>
            </React.Fragment>
        )

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    { images.map((img) => {
                        return (
                            <Imagen
                                key={img.id}
                                image={img}
                            />
                        )
                            
                        })
                    }
                </div>
                <Paginacion previousPage={this.props.previousPage} afterPage={this.props.afterPage}/>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                { this.showImages() }
            </React.Fragment>
        );
    }
}

export default Resultado;