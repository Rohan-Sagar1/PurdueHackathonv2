import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={
          <>
            <Header />
            <Home />
            <Sidebar />
          </>
      } />
        </Routes>
        </Router>
    )
}

export default App;
