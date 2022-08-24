import './App.css'
import MainDash from './components/MainDash/MainDash';
import Pullout from './Pages/Pullout-Tracker/Pullout'
import Sidebar from './components/Sidebar/Sidebar'; 
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <div className='AppGlass'>
         <Sidebar/>
         <Routes>
          <Route exact path="/" element={<MainDash/>}/>
          <Route exact path="/dashboard" element={<MainDash/>}/>
          <Route exact path="/pullout" element={<Pullout/>}/>
         </Routes>

         <div></div>
       </div>
    </div>
  );
}

export default App;
