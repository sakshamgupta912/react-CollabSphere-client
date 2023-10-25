import { HashRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import LandingPage from "./pages/LandingPage/LandingPage";
import InRoom from "./pages/InRoom/InRoom";
import NoPage from "./pages/NoPage";
import InAssignment from "./components/LandingPageContent/Assignment/InAssignment";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route index element= {<Login/>} />
            <Route path='/react-CollabSphere-client' element ={<Login/>} />
            <Route path='/index' element ={<Login/>} />
            <Route path='/Login' element ={<Login/>} />
            <Route path='/Register' element ={<Register/>} />
            <Route path='/LandingPage' element ={<LandingPage />} />
            <Route path='/LandingPage/:id' element ={<InAssignment />} />
            <Route path='/InRoom' element ={<InRoom />} />
            <Route path='/*' element ={<NoPage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
