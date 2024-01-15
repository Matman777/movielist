import './App.css';
import './Home/Home.css';
import {Routes, Route } from "react-router-dom";
import Details from './Details/Detail';
import NowPlayingMovies from './NowPlayingMovies';


function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<NowPlayingMovies />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
      </div>
    
  );
}

export default App;
