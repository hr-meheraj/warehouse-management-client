import './App.css';
import Navbar from './components/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import RequireAuth from './components/Authentication/RequireAuth';
import MyItem from './components/Pages/MyItems/MyItem.jsx'
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import ResetPassword from './components/Authentication/ResetPassword';
import NotFound from './components/Pages/NotFound/NotFound';
import AddNew from './components/Pages/AddNew/AddNew';
import Blogs from './components/Pages/Blogs/Blogs';
import UpdateProducts from './components/Pages/ManageInventory/UpdateProducts';
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
                <Route path='/inventory/:id' element={<UpdateProducts/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='/add-new' element={<AddNew />} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='my-items' element={<MyItem/>}/>
                <Route path='*' element={ <NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
