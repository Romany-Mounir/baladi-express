import './App.css';
import MainPage from './pages/mainPage';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
