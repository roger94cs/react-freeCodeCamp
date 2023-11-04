import React from 'react';
import '../css/Testimonio.css'

class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../img/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.nombre}`}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{this.props.nombre}</strong> in {this.props.pais}
          </p>
          <p className='cargo-testimonio'>
            {this.props.cargo} at <strong>{this.props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>
            "{this.props.testimonio}"
          </p>
        </div>
      </div>
    );
  };
};

export default Testimonio;