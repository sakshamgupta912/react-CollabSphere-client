import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login/Login"
import LandingPage from "./pages/LandingPage/LandingPage";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element= {<Login/>} />
            <Route path='/Login' element ={<Login/>} />
            <Route path='/LandingPage' element ={<LandingPage />} />
            <Route path='*' element ={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
