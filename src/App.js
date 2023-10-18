import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
function App() {
    return (
        <div className="App">
          <>
            <Navbar></Navbar>
            <Intro></Intro>
          </>
        </div>
    );
}

export default App;
