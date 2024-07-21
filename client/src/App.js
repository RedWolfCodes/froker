import './App.css';
import { Hero, Blog } from './components';
import { Routes, Route } from 'react-router-dom'
import Layout from './layout';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout children={<Hero />} />} />
        <Route path="/blog/:id" element={<Layout children={<Blog />}/>} />
      </Routes>      
    </div>
  );
}

export default App;
