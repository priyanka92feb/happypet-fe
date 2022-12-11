import classes from './PetItem.module.css';
import PetItemForm from './PetItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const PetItem = props => {
const price = `£${props.price.toFixed(2)}`;
const cartCtx = useContext(CartContext);
const addToCartHandler = amount => {
    cartCtx.addItem({
        id: props.id,
        key: props.id,
        itemName: props.itemName,
        price: props.price,
        amount: amount,
        description: props.desc
    });
};

return <li className={classes.petItem}>
        <div><h3>{props.itemName}</h3>
            <div className={classes.description}>{props.desc}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <PetItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
};

export default PetItem;