
import { Route, Routes } from 'react-router-loading';
import Coming from './pages/others/Coming';
import { topbar } from "react-router-loading";
import BootcampStart from './pages/others/BootcampStart';

function App() {

  topbar.config({
      autoRun: false,
      barThickness: 5,
      barColors: {
          0: '#E94034',
          .3: '#E94034',
          1.0: '#E94034'
      },
      shadowBlur: 5,
      shadowColor: 'red',
      className: 'topbar'
  });


  return (
    <div>
     

     <Routes maxLoadingTime={1000}>
        <Route path="/" element={<Coming/>} loading/>
        <Route path="/bootcamp-start" element={<BootcampStart/>} loading  />
     </Routes>
    </div>
  );
}

export default App;
