import classes from './Admin.module.css';
import Modal from '../UI/Modal';
import CartItem from '../Cart/CartItem';


const Admin = props => {

    const dummyOrderitems = [
        {
            "id": 1,
            "itemName": "BestToys Tugging Rope",
            "quantity": 1,
            "description": "Best tugging rope to keep your dog occupied",
            "price": 15
        },
        {
            "id": 12,
            "itemName": "BestToys Tugging Rope",
            "quantity": 1,
            "description": "Best tugging rope to keep your dog occupied",
            "price": 15
        },
        {
            "id": 13,
            "itemName": "BestToys Tugging Rope",
            "quantity": 1,
            "description": "Best tugging rope to keep your dog occupied",
            "price": 15
        }
    ];
    const cartItems =
        (<ul className={classes['cart-items']}>
            {dummyOrderitems.map((item) => (
                <CartItem key={item.id}
                    id={item.id}
                    itemName={item.itemName}
                    amount={item.amount}
                    price={item.price}
                    desc={item.desc}
                />
            ))}
        </ul>);
    return (<Modal>
        <h2>Orders</h2>
        {cartItems}
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Modal>
    )

};

export default Admin;