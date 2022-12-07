import './assets/dist/css/bootstrap.min.css';
import './assets/dist/js/bootstrap.bundle.min';
import './App.css';
import './component/js/scripts';
import Navbar from './component/navbar';
import Sections from './component/sections';


function App() {
  // const profile_name = "Thanaphong Songsisai";
  return (
    <div className='App'>
      <Navbar />
      <Sections />
    </div>
  );
}

export default App;
