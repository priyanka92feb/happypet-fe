import { Fragment } from 'react';
import happypetsImage from '../../assets/happypets.jpg';
import classes from './Header.module.css';
import HeadCartButton from './HeaderCartButton';
import { useContext} from 'react';
import AuthContext from '../../store/auth-context';
  
const Header = props => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () => {
        authCtx.logout();
    }
    const profileHandler = () => {
       console.log("profile code")
    }
    return <Fragment>
        <header className={classes.header}>
            <h1>Happy Pet</h1>
            {isLoggedIn && <button className={classes.button} onClick={logoutHandler}>Logout</button>}
            {isLoggedIn && <button className={classes.button} onClick={profileHandler}>Profile</button>}
            {isLoggedIn && <HeadCartButton onClick={props.onShowCart}/>}
        </header>
        <div className={classes['main-image']}>
            <img src={happypetsImage} alt ='happy pets lying around!'/>

        </div>
    </Fragment>
};


export default Header;