import './App.css';
import Footer from './components/Footer/Footer';
import FooterContato from './components/FooterContato/FooterContato';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Institucional from './components/Institucional/Institucional';
import NewsLatter from './components/NewsLatter/NewsLatter';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <NewsLatter />
      <Institucional />
      <Footer />
      <FooterContato />
    </div>
  );
}

export default App;
