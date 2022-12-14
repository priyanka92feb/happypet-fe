import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';


const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLoggedIn && <li>
            <button>Logout</button>
          </li>}
          <li>
            <Link to='/home'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
