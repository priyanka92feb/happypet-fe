import classes from './AvailableNewPetItems.module.css'
import Card from '../UI/Card';
import PetItem from './PetItem/PetItem';
import { useEffect, useState } from 'react';


const AvailableNewPetItems = () => {
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
    const newPetItems = newPetItemsFromDb.map(newPetItem => <PetItem
        id={newPetItem.id}
        key={newPetItem.id}
        itemName={newPetItem.itemName}
        desc={newPetItem.desription}
        price={newPetItem.price} />
    );
    return (
        <section className={classes.newPetItems}>
            <Card>
                <ul>
                    {newPetItems}
                </ul>
            </Card>

        </section>);

};

export default AvailableNewPetItems;