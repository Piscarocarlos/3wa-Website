
import { Route, Routes } from 'react-router-loading';
import Coming from './pages/others/Coming';
import Test from './pages/others/Test';
import { topbar } from "react-router-loading";

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
        <Route path="/" element={<Coming/>} />
        <Route path="/test" element={<Test/>} loading  />
     </Routes>
    </div>
  );
}

export default App;
