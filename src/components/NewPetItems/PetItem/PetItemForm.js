import classes from './PetItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState, useContext } from 'react';
import AuthContext from '../../../store/auth-context';

const PetItemForm = props => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const isAdmin = authCtx.isAdmin;
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if(enteredAmount.trim().length === 0 
            || enteredAmountNum < 1 
            || enteredAmount > 10) {
                setAmountIsValid(false);
                return;
        }
        props.onAddToCart(enteredAmountNum);
    };

return (
    <form className={classes.form} onSubmit={submitHandler}>
        {isLoggedIn && !isAdmin && <Input 
            ref = {amountInputRef}
            label="Amount" 
            input={{
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}  />}
        {isLoggedIn && !isAdmin && <button>+ Add</button>}
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
);

};

export default PetItemForm;