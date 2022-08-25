import {Routes , Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/Homepage';
import "./App.css";
const App = () => {
    return ( 
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
        </Routes>
     );
}
 
export default App;