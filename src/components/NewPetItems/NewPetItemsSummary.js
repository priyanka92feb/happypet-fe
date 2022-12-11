import classes from './NewPetItems.module.css';

const NewPetItemsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>
                Find all you pet's favorite toys, beds, leads etc.
            </h2>
            <p>
                Please select an item you like and quantity you prefer, add it to the cart. 
            </p>
            <p>
                Before you add it to the cart, Please create an account with us with few simple information.
                Login and confirm your order.
            </p>
        </section>

    );
};

export default NewPetItemsSummary;