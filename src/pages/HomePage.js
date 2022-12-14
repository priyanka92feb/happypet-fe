import Header from '../components/Layout/Header';
import { useState } from 'react';
import NewPetItems from '../components/NewPetItems/NewPetItems';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';

const HomePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);

  };

  const hideCartHandler = () => {
    setCartIsShown(false);

  };

  const showOrderSubmitHandler = () => {
    setCartIsShown(false);
    alert("Order has been submitted")

  }
  return (
    <section>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} onOrder={showOrderSubmitHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>

          <NewPetItems>
          </NewPetItems>
        </main>
      </CartProvider>
    </section>);
};

export default HomePage;
