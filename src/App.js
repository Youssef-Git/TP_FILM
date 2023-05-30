import './App.css';
import MovieCard from './component/MovieCard';
import {Route, Routes} from "react-router-dom";
import QuestionsPage from './component/QuestionsPage';

function App() {
  return (
  
  <div>
  <Routes>
  <Route path = "/" element={<MovieCard />} />
  <Route path="/questions" element={<QuestionsPage />} />
  </Routes>
  </div>
  )
  
}

export default App;