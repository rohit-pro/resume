import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Qualification from './components/Qualification';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App">
      <div className='left-side-container'>
        <Profile />
        <Skills />
      </div>
      <div className='middle-space-container'></div>
      <div className='right-side-container'>
        <About />
        <Experience />
        <Qualification />
      </div>
    </div>
  );
}

export default App;
