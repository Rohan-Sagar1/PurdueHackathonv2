import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Sidebar />
<<<<<<< HEAD
      <Home />
=======
      <Header />
>>>>>>> 19b2399ed725942430dfcaa6be41de264d33a521
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
