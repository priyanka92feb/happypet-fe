import Header from './components/Layout/Header';
import { useState} from 'react';
import NewPetItems from './components/NewPetItems/NewPetItems';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
    setIsOrderSubmitted(false);

  };

  const hideCartHandler = () => {
    setIsOrderSubmitted(false);
    setCartIsShown(false);

  };

  const showOrderSubmitHandler = () => {
    setCartIsShown(false);
    setIsOrderSubmitted(true);

  }


  return (
    
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={showOrderSubmitHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        {isOrderSubmitted && <h2>Order Has Been Submitted</h2>}
        <NewPetItems>
          
        </NewPetItems>

      </main>
    </CartProvider>
    
  );
}

export default App;
