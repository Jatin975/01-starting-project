import Navbar from './components/Navbar';
import Meals from './components/Meals';
import Cart from './components/Cart';
import './index.css'
import Checkout from './components/Checkout';
import OrderCompletedDialog from './components/OrderCompletedDialog';
import { CardContextProvider } from './store/CardContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

function App() {
  return (
    <UserProgressContextProvider>
      <CardContextProvider>
        <Navbar />
        <Cart />
        <Checkout />
        <OrderCompletedDialog />
        <Meals />
      </CardContextProvider>
    </UserProgressContextProvider>
  );
}

export default App