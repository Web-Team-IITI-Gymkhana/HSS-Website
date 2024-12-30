import { Route , BrowserRouter as Router , Routes} from 'react-router-dom';
import './App.css';
import FacultyList from './components/faculty-member';
import {Home} from './components/HomePage';
import ResearchAreas from './components/ResearchAreas';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<FacultyList />} />
        <Route path="/research_areas" element={<ResearchAreas />} />
      </Routes>
    </Router>
  );
}

export default App;
