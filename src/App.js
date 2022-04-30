import './App.css';
import Navbar from './components/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import RequireAuth from './components/Authentication/RequireAuth';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Login from './components/Authentication/Login';
function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/inventory' element={
                    <RequireAuth>
                        <ManageInventory/>
                    </RequireAuth>
                }/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
