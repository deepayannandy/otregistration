import React, {useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Footer } from './components';
import { Registration, Thankyou} from './pages';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    
      <div>
            <Routes>
              <Route path='/' element={<Registration/>}/>
              <Route path='/pocsof/clients/t1lregistration/' element={<Registration/>}/>
              <Route path='/pocsof/clients/t1lregistration/userprofile/' element={<Registration/>}/>
              <Route path='/pocsof/clients/t1lregistration/thankyou' element={<Thankyou/>}/>
            </Routes>
      </div>
          <Footer/>
    </BrowserRouter>
  )
}

export default App