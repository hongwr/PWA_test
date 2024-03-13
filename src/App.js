import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TestPage1 from './TestPage1';
import TestPage2 from './TestPage2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='testpage1' element={<TestPage1 />} />
        <Route path='testpage2' element={<TestPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
