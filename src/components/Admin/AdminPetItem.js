import classes from './AdminPetItem.module.css';

const AdminPetItem = (props) => {
  const price = `£${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h3>{props.itemName}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.price}>{props.quantity}</span>
        </div>
      </div>
      
    </li>
  );
};

export default AdminPetItem;
