import Landing from "./Pages/Landing";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Error from './Pages/Error';
import Register from './Pages/Register';
import ProtectedRoute from "./Pages/ProtectedRoute";
import SharedLayout from "./Pages/Dashboard/SharedLayout";
import IdePage from "./Pages/IdePage";
import Profile from "./Pages/Profile";
import ProblemList from "./Pages/ProblemList";
import SumTwo from "./Component/SumTwo.js";
import Palindrome from "./Component/Palindrome.js";
import AddTwo from "./Component/AddTwo.js";
import './App.css';


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<ProtectedRoute><SharedLayout></SharedLayout></ProtectedRoute>}>
          <Route index element = {<IdePage/>}></Route>
          <Route path = "ide" element = {<IdePage/>}>
            <Route path = "sum-two" element = {<SumTwo/>}/>
            <Route path = "add-two" element = {<AddTwo/>}/>
            <Route path = "palindrome" element = {<Palindrome/>}/>
          </Route>
          <Route path = "profile" element = {<Profile/>}></Route>
          <Route path = "question" element = {<ProblemList/>}></Route>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
