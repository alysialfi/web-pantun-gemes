import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Form from './Form'
import Pantun from './Pantun';
// import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/pantun" element={<Pantun />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
