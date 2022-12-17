import classes from './HeaderCartButton.module.css';

const HeadAdminButton = (props) => {
    
    return (<button className={classes.button} onClick={props.onClick}>
       
        <span>
            Admin Panel
        </span>
        
    </button>);
};

export default HeadAdminButton;