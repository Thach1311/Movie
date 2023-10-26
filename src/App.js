import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';

function App() {
    return (
        <div className="App">
            <>
                <Navbar></Navbar>
                <Intro></Intro>
                <Contents />
                <Menu />
                <MoviesDetail/>
            </>
        </div>
    );
}

export default App;
