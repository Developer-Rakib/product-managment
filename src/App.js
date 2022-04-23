import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import UpgrageProduct from './Pages/UpgradeProduct/UpgrageProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>} ></Route>
        <Route path='/upgradeProduct' element={<UpgrageProduct></UpgrageProduct>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
