import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import AppBasket from '../pages/AppBasket';
import Products from '../pages/Products';
import Favourite from '../pages/Favourite';
import { BasketProvider } from '../context';

import './App.css';
import Contacts from '../pages/Contacts';
import Conditions from '../pages/Conditions';


function App() {

    return (
        <BasketProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route path='/' element={<Products/>}/>
                            <Route path='basket' element={<AppBasket/>}/>
                            <Route path='favourite' element={<Favourite/>}/>
                            <Route path='contacts' element={<Contacts/>}/>
                            <Route path='conditions' element={<Conditions/>}/>
                        </Route>
                    </Routes>
                </Router>
        </BasketProvider>

    )
}

export default App;