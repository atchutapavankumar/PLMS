import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faculty from "./components/Faculty";
import LoginForm from "./components/Login";
import ApplyForm from "./components/ApplyHeader";
import HOD from "./components/HOD";
import Principal from "./components/Principal";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/" element={<LoginForm />} />
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/hod" element={<HOD />} />
      <Route path="/principal" element={<Principal/>}/>

    </Routes>
  </BrowserRouter>
);

export default App;
