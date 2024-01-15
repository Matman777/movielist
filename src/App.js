import './App.css';
import {Routes, Route } from "react-router-dom";
import Details from './Details/Detail';
import NowPlayingMovies from './NowPlayingMovies';



function App() {
  return (
      
      <Routes>
        <Route path="/" element={<NowPlayingMovies />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
      
    
  );
}

export default App;
