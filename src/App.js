import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
function App() {
    return (
        <div className="App">
            <>
                <Navbar></Navbar>
                <Intro></Intro>
                <Contents />
                <Menu />
            </>
        </div>
    );
}

export default App;
