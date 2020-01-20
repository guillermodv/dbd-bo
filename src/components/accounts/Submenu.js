import React from 'react';

const Submenu = () =>(
    <nav className="navbar navbar-expand-lg bg-light my-2" style={{'height':'40px'}}>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <button className="btn btn-secondary" data-toggle="collapse" data-target="#collapseThis" aria-expanded="true" aria-controls="collapseThis">
                    Notas
                </button>
                &nbsp;
                <button className="btn btn-secondary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseThis">
                    Contactos
                </button>
                &nbsp;
                <button className="btn btn-secondary" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseThis">
                    Direcciones
                </button>
                &nbsp;
                <button className="btn btn-secondary" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseThis">
                    Eventos
                </button>
                &nbsp;
                <button className="btn btn-secondary" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseThis">
                    Oportunidades
                </button>
                &nbsp;
                <button className="btn btn-secondary" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseThis">
                    Servicios
                </button>
            </ul>
        </div>
    </nav>
);

export default Submenu;
