import React from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component";
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercise.component';
import CreateExercises from './components/create-exercises.component';
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes> 
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercises />} />
        <Route path="/create" element={<CreateExercises/>} />
        <Route path="/user" element={<CreateUser />} />     
      </Routes>
    </div>
   
  );
}

export default App;
