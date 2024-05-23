import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MainComponents from './components/MainComponents';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderComponent />
      </div>
      <div className='h-[150vh]'>
        <MainComponents/>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
