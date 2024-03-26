import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faculty from "./components/Faculty";
import LoginForm from "./components/Login";
import ApplyForm from "./components/ApplyHeader";
import HOD from "./components/HOD";
import Principal from "./components/Principal";
import AdminPage from "./components/Admin";
import AdminLeaveRules from "./components/AdminLeaveRules";
import HodHistorySearch from "./components/HodHistorySearch";
import ApplyLeaveForm from "./components/ApplyLeaveForm";
import FacultyRequests from "./components/FacultyRequests";
import HodApplyLeaveForm from "./components/HodApplyLeaveForm";
import FacultyMain from "./components/FacultyMain";
import HODMain from "./components/HODMain";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/faculty-history" element={<Faculty />} />
      <Route path="/" element={<LoginForm />} />
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/hod" element={<HOD />} />
      <Route path="/principal" element={<Principal/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/admin-leave-rules" element={<AdminLeaveRules/>} />
      <Route path="/hod-history-search" element={<HodHistorySearch/>}/>
      <Route path="/hod-apply-leave-form" element={<HodApplyLeaveForm/>}/>
      <Route path="/apply-leave-form" element={<ApplyLeaveForm/>}/>
      <Route path="/class-requests" element={<FacultyRequests/>}/>
      <Route path="/faculty-main" element={<FacultyMain/>}/>
      <Route path="/hod-main" element={<HODMain/>}/>






    </Routes>
  </BrowserRouter>
);

export default App;
