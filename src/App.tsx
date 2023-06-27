import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />  
      </Routes>
    </div>
  );
}

export default App;
