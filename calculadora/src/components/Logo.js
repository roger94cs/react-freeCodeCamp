import freeCodeCampLogo from '../img/freeCodeCamp-logo.png';
import '../css/Logo.css';

const Logo = () => {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
      />
    </div>
  );
}

export default Logo;