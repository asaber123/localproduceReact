
import { Header } from './components/header/Header';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { Search } from './pages/search/Search';
import {Footer} from './components/footer/Footer';


//Here is all components/pages from making the one page web. 
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Search />
      <Footer/>

    
    </div>
  );

};

export default App;
