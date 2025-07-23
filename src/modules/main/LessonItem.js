import { useState } from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function LessonItem({ aulaNumero, tituloAula, infoTexto }) {
  const [isVisible, setIsVisible] = useState(false); // Cada LessonItem tem seu PRÓPRIO estado

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <li>
      <h2>AULA {aulaNumero}</h2>
      <div>
        <h3 style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>{tituloAula}</h3>
        <button onClick={handleToggle}>
          {!isVisible && (
            <span className='ico_plus'>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          )}
          {isVisible && (
            <span className='ico_minus'>
              <FontAwesomeIcon icon={faMinus} />
            </span>
          )}
        </button>
      </div>
      {isVisible && (
        <p className='infoCurse'>{infoTexto}</p>
      )}
    </li>
  );
}

export default LessonItem;