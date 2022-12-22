import Landing from "./Pages/Landing";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Error from './Pages/Error';
import Register from './Pages/Register';
import ProtectedRoute from "./Pages/ProtectedRoute";
import { IDEPage, Profile, SharedLayout } from "./Pages/Dashboard.js";
import Problem from "./Pages/Dashboard.js/Problem";
import SumTwo from "./Component/SumTwo.js";
import Palindrome from "./Component/Palindrome.js";
import AddTwo from "./Component/AddTwo.js";


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<ProtectedRoute><SharedLayout></SharedLayout></ProtectedRoute>}>
          <Route index element = {<IDEPage></IDEPage>}></Route>
          <Route path = "ide" element = {<IDEPage></IDEPage>}>
            <Route path = "sum-two" element = {<SumTwo/>}/>
            <Route path = "add-two" element = {<AddTwo/>}/>
            <Route path = "palindrome" element = {<Palindrome/>}/>
          </Route>
          <Route path = "profile" element = {<Profile></Profile>}></Route>
          <Route path = "question" element = {<Problem/>}></Route>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
