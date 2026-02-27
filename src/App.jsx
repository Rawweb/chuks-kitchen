import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import FoodDetails from './pages/FoodDetails';
import Cart from './pages/Cart';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Welcome from './pages/auth/Welcome';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Confirmed from './pages/Confirmed';
import Account from './pages/Account';
import ScrollToTopButton from './components/ui/ScrollToTopButon';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public */}
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/food-details/:id' element={<FoodDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-orders' element={<Order />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/confirmed' element={<Confirmed />} />
          <Route path='/account' element={<Account />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/welcome' element={<Welcome />} />
        </Route>
      </Routes>

      {/* Floating Scroll Button */}
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
