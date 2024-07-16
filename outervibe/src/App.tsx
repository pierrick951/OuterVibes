import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layout/Home";
import Error from "./Layout/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
