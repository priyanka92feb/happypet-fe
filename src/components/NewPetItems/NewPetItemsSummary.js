import classes from './NewPetItems.module.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
const NewPetItemsSummary = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <section className={classes.summary}>
            <h2>
                Find all you pet's favorite toys, beds, leads etc.
            </h2>

            <p>
                Please select an item you like and quantity you prefer, add it to the cart and confirm your order..
            </p>
            {!isLoggedIn && <div>
                <p>
                    Before you can add items to the cart, please login or create an account with us.</p>

                    <p><Link to="/auth" className={classes.link}>Login</Link></p>

                
            </div>}
        </section>

    );
};

export default NewPetItemsSummary;