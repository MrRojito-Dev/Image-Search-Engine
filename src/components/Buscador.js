import React, { Component } from 'react';

class Buscador extends Component {

    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault();

        // El valor del input
        const term = this.searchRef.current.value;

        // Enviamos el valor al componente principal
        this.props.searchData(term)
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    {this.props.message}
                    <div className="form-gruop col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imágen... Ejemplo: Fútbol"/>
                    </div>
                    <div className="form-gruop col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}



export default Buscador;