import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchstudent from './component/Searchstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addfaculty from './component/Addfaculty';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addstudent/>}/>
      <Route path="/search" exact element={<Searchstudent/>}/>
      <Route path="/faculty" exact element={<Addfaculty/>}/>



    </Routes>
    
    
    
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
