import { Fragment } from 'react';
import happypetsImage from '../../assets/happypets.jpg';
import classes from './Header.module.css';
import HeadCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Happy Pet</h1>
            <HeadCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={happypetsImage} alt ='happy pets lying around!'/>

        </div>
    </Fragment>
};


export default Header;