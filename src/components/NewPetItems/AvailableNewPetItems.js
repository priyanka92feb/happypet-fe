import classes from './AvailableNewPetItems.module.css'
import Card from '../UI/Card';
import PetItem from './PetItem/PetItem';

const dummyNewPetItems =[
    {
        "id": 1,
        "itemName": "BestToys tennis balls",
        "desription": "best pet toys",
        "price": 1
    },
    {
        "id": 2,
        "itemName": "Mighty Kitty Cat toy",
        "desription": "best pet toys",
        "price": 3
    },
    {
        "id": 3,
        "itemName": "Plushy Dog Beds",
        "desription": "best pet toys",
        "price": 1
    },
    {
        "id": 4,
        "itemName": "BestToys Chew Toy",
        "desription": "best pet toys",
        "price": 5
    }
]

const AvailableNewPetItems = () => {
    const dummyPetItems = dummyNewPetItems.map(newPetItem => <PetItem
        id = {newPetItem.id}
        key ={newPetItem.id}
        itemName = {newPetItem.itemName}
        desc = {newPetItem.desription}
        price = {newPetItem.price}/>
        );
    return (
    <section className={classes.newPetItems}>
        <Card>
            <ul>
                {dummyPetItems}
            </ul>
        </Card>
        
    </section>);

};

export default AvailableNewPetItems;