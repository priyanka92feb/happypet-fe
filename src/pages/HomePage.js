import Header from '../components/Layout/Header';
import { useState } from 'react';
import NewPetItems from '../components/NewPetItems/NewPetItems';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';
import Admin from '../components/Admin/Admin';

const HomePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [adminIsShown, setIsAdminShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);

  };
  const showAdminHandler = () => {
    setIsAdminShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);

  };

  const hideAdminHandler = () => {
    setIsAdminShown(false);
  }

  const showOrderSubmitHandler = () => {
    setCartIsShown(false);
    alert("Order has been submitted")

  }
  return (
    <section>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} onOrder={showOrderSubmitHandler} />}
        {adminIsShown && <Admin onClose={hideAdminHandler} />}
        <Header onShowCart={showCartHandler} onShowAdmin={showAdminHandler}/>
        <main>

          <NewPetItems>
          </NewPetItems>
        </main>
      </CartProvider>
    </section>);
};

export default HomePage;
