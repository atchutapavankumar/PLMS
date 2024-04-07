import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faculty from "./components/Faculty";
import Login from "./components/Login";
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
import Profile from  "./components/Profile";
import Register from "./components/Register";
import WorkLoadView from "./components/WorkLoadView";
import HODProfile from "./components/HODProfile";
import WorkloadHistroy from "./components/WorkloadHistory";
import HODHistory from "./components/HODHistory";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/faculty-history" element={<Faculty />} />
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<Register/>}/>
      {/* <Route path="/apply" element={<ApplyForm />} /> */}
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
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/faculty-profile" element={<Profile/>}/>
      <Route path="/hod-profile" element={<HODProfile/>}/>
      <Route path="/hod-history" element={<HODHistory/>}/>



      <Route path="/work-load" element={<WorkLoadView/>}/>
      <Route path="/workload-history" element={<WorkloadHistroy/>}/>


    </Routes>
  </BrowserRouter>
);

export default App;
