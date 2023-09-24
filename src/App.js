import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element= {<Login/>} />
            <Route path='/Login' element ={<Login/>} />
            <Route path='/Home' element ={<Home />} />
            <Route path='*' element ={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
