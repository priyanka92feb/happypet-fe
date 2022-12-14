import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if(!isLogin) {
      const enteredEmail = emailInputRef.current.value;
    }

    let url;

    if (isLogin) {
      url = 'http://localhost:9092/api/auth/signin';
    } else {
      url = 'http://localhost:9092/api/auth/signup';
    }
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          username: enteredUsername,
          //email: enteredEmail,
          password: enteredPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        } else {
            let errorMessage = 'Authentication Failed';
            throw new Error(errorMessage);
        }
      }).then((data) => {
        console.log(data);
        authCtx.login(data.token);
        history.replace('/home')

      }).catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='userName'>Your Username</label>
          <input type='userName' id='userName' required ref={usernameInputRef} />
        </div>
        {!isLogin && <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>}
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
