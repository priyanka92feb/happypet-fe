import classes from './Admin.module.css';
import Modal from '../UI/Modal';
import AdminPetItem from '../Admin/AdminPetItem';
import { useState, useEffect } from 'react';


const Admin = props => {

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
    return (<Modal>
        <h2>All Available Pet Items</h2>
        {petItems}
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Modal>
    )

};

export default Admin;