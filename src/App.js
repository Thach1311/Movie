import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Contents from './components/Contents/Contents';
// import Intro from './components/Intro/Intro';
// import Menu from './components/Menu/Menu';
// import MoviesDetail from './components/MoviesDetail/MoviesDetail';

// import { useSelector } from 'react-redux';
// import SearchMovies from './components/SearchMovies/SearchMovies';
import Home from './components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Pages/Search';
function App() {
    // const { MovieDetail } = useSelector((state) => state.infoMovies);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
                {/* <Intro></Intro>
                <Contents />
                <Menu />
                <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false} /> */}
                {/* <SearchMovies/> */}
                {/* <Home/> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
