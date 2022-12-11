import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    console.log(cartCtx.items);
    
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };
    const cartItems = 
    (<ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
        <CartItem key={item.key}
        id={item.id}
        itemName={item.itemName}
        amount={item.amount}
        price={item.price}
        desc={item.desc}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}    
        />
        ))}
    </ul>);
    return (<Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

            {hasItems && <button className={classes.button} onClick={props.onOrder}>Order</button>}
        </div>
        </Modal>
    )

};

export default Cart;