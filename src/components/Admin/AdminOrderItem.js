import classes from './AdminPetItem.module.css';

const AdminOrderItem = (props) => {
  const totalAmount = `£${props.totalAmount.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h3>Order # {props.id}</h3>
        <div className={classes.summary}>
        <h3 className={classes.price}>{props.userName}</h3>
          <h3 className={classes.price}>{totalAmount}</h3>
          <h3 className={classes.price}>{props.quantity}</h3>
        </div>
      </div>
      
    </li>
  );
};

export default AdminOrderItem;
