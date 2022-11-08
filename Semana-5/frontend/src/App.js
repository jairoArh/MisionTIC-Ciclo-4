import logo from './logo.svg';
import { Navbar} from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Navigation />
    </BrowserRouter>
  );
}

export default App;
