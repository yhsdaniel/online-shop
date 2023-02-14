import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/container/Home';
import LoginForm from './components/features/LoginForm';
import ListCart from './components/container/ListCart';
import DetailProduct from './components/features/DetailProduct';

function App() {
  return (
    <div className="App font-mono h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<LoginForm />} />
          <Route path={`detail-product`} element={<DetailProduct />} />
          <Route path='Cart' element={<ListCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
