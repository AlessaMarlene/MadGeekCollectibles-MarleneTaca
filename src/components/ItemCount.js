import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemCount = ({stock, initialState, onAdd}) => {
    const [itemCounter, setItemCounter] = useState(initialState);

    const handleClick = (operator) => {
        if(operator === '+' && itemCounter < stock) setItemCounter(itemCounter + 1);
        else if(operator === '-' && itemCounter > 1) setItemCounter(itemCounter - 1);

        onAdd(itemCounter);
    }

    return (
        <div className='center-align' id='itemCounter'>
            {itemCounter > 0 && <p className='green-text'>¡Stock still available!</p>}
            <div>
                <a 
                    className="btn-floating btn-medium waves-effect waves-light" 
                    onClick={() => handleClick('-')}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </a>
                <span>{itemCounter}</span>
                <a 
                    className="btn-floating btn-medium waves-effect waves-light"
                    onClick={() => handleClick('+')}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </a>
            </div>
            <Link 
                to='/cart'
                className="waves-effect waves-light btn-large"
                id="addCartButton"
            >
                Add to cart
            </Link>
        </div>
    );
}

export default ItemCount;