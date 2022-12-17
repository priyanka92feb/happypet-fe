import classes from './Admin.module.css';
import Modal from '../UI/Modal';
import AdminPetItem from '../Admin/AdminPetItem';
import { useState, useEffect } from 'react';
import AdminOrderItem from '../Admin/AdminOrderItem'


const Admin = props => {
    const dummyOrdersList = [{
        "id": 13,
        "totalAmount": 100,
        "userName": "test11",
    },
    {
        "id": 15,
        "totalAmount": 200,
        "userName": "test12",
    }];

    const [newPetItemsFromDb, setNewPetItemsFromDb] = useState([]);
    useEffect(() => {
        try {
            fetch('http://localhost:9092/happypet/newPetItems')
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        let errorMessage = 'Something went wrong, please try again later.';
                        throw new Error(errorMessage);
                    }
                })
                .then((data) => {
                    console.log(data);
                    setNewPetItemsFromDb(data.allNewPetItems);
                    return data;
                })
            console.log(newPetItemsFromDb);
        } catch (error) {
            alert(error.message);
        }
    }, []);
    const petItems =
        (<ul className={classes['cart-items']}>
            {newPetItemsFromDb.map((item) => (
                <AdminPetItem key={item.id}
                    id={item.id}
                    itemName={item.itemName}
                    quantity={item.quantity}
                    price={item.price}
                    desc={item.desc}
                />
            ))}
        </ul>);
    const orderItems =
    (<ul className={classes['cart-items']}>
            {dummyOrdersList.map((item) => (
                <AdminOrderItem key={item.id}
                    id={item.id}
                    totalAmount={item.totalAmount}
                    date={item.orderDate}
                    userName={item.userName}
                />
            ))}
        </ul>);
    return (<Modal>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
        <h3>All Available Pet Items</h3>
        {petItems}
        <h3>All Customer Orders</h3>
        {orderItems}
    </Modal>
    )

};

export default Admin;