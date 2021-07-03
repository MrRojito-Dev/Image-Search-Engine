import React from 'react';

const Paginacion = (props) => {
    return (
        <div className="py-3 text-center">
            <button onClick={props.previousPage} type="button" className="py-3 btn btn-info mr-1">◀️ Anterior</button>
            <button onClick={props.afterPage} type="button" className="py-3 btn btn-info">Siguiente ▶️</button>
        </div>
    )
}

export default Paginacion;