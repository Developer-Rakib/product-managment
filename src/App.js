import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import UpgrageProduct from './Pages/UpgradeProduct/UpgrageProduct';
import { Toaster } from 'react-hot-toast';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/upgrade/:id' element={<UpgrageProduct></UpgrageProduct>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
