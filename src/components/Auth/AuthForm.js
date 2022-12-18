import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const [password, setPassword] = useState('');

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    var enteredEmail = null;
    if (!isLogin) {
      enteredEmail = emailInputRef.current.value;
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
          email: enteredEmail,
          password: enteredPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      }).then((data) => {
        console.log(data);
        if(isLogin) {
          authCtx.login(data);
          history.replace('/home')
        }
        else {
          alert("Account Creation Succesful, please login using credentials")
          window.location.reload(true);
        }

      }).catch((error) => {
        if (error.status === 400 || error.status === 404) {
          if (isLogin) {
            let errorMessage = 'Authentication Failed';
            alert(errorMessage);
          }
          else {
            let errorMessage = 'Account Creation Failed';
            alert(errorMessage + error.statusText);
          }
        }
        else {
          alert("Something went wrong, please try again later");
        }
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='userName'>Your Username</label>
          <input type='userName' id='userName' required ref={usernameInputRef}
            minLength={6} maxLength={20} />
        </div>
        {!isLogin && <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}  maxLength={50}/>
        </div>}
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}
            onChange={e => setPassword({ password: e.target.value })}
            minLength={6} maxLength={100} />
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
