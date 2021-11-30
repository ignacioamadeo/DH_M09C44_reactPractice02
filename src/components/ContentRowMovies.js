import React from 'react';
import PropTypes from 'prop-types';

function ContentRowMovies(props) {
    return (
        <div>
            {/*<!-- Abro div que define la iteración en el array de props que vienen de ContentRowTop.js: -->*/}
            {props.titles.map((item, i) =><div key={item+i}>

            {/*<!-- Itero entre estilos de bordes: -->*/}
            <div className={props.borderColors[i]}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                
                                {/*<!-- Itero entre titulos de tarjeta: -->*/}
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titles[i]}</div>
                                
                                {/*<!-- Itero entre numeros de tarjeta: -->*/}
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.counts[i]}</div>
                            </div>
                            <div className="col-auto">

                                {/*<!-- Itero entre íconos de tarjeta: -->*/}
                                <i className={props.icons[i]}></i>
                            </div>
                        </div>
                </div>
            </div>

            {/*<!-- Cierro div que define la iteración en el array de props que vienen de ContentRowTop.js: -->*/}
            </div>
            )}
        </div>
    )
}

{/*<!-- Agrego los requisitos de tipos de datos de cada variable: -->*/}
ContentRowMovies.propTypes = {
    titles: PropTypes.string.isRequired,
    counts:PropTypes.number.isRequired,
    borderColors: PropTypes.string.isRequired,
    icons: PropTypes.isRequired
}

{/*<!-- Agrego los valores default para cada variable: -->*/}

ContentRowMovies.defaultProps = {
    titles: "Sin título",
    counts: 0,
    borderColors: "card border-left-warning shadow h-100 py-2",
    icons: "fas fa-film fa-2x text-gray-300"
}




{/*<!-- Exporto el componente: -->*/}
export default ContentRowMovies;