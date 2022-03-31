import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./components/SignIn"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/nav" element={<Nav />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
