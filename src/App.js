import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/container/ListAllProduct';
import LoginForm from './components/features/LoginForm';
// import ListDetailProduct from './components/container/ListDetailProduct';
import ListCart from './components/container/ListCart';
import DetailProduct from './components/features/DetailProduct';

function App() {

  return (
    <div className="App font-mono">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<LoginForm />} />
          <Route path='DetailProduct' element={<DetailProduct />} />
          <Route path='Cart' element={<ListCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
