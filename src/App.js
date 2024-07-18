import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import Home from './pages/Home.js';
import StartPage from './pages/StartPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
<<<<<<< HEAD
          <Route path="*" element={<NotFoundPage />} />
=======
          <Route path="*" element={<NotFoundPage/>}/>
>>>>>>> 204ea77dcfd9b43cbe2a74d556f599f13e5d0eed
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
