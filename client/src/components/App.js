import React from "react";
import Signup from "./signup";
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Transactions from "../transactions";

function App() {
  return ( 
      <Container 
        className="d-flex align-items-center justify-content-center" 
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
                />
                <Route path="/update-profile" element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                } 
                />
                <Route path="/transactions" element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
                } 
                />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  )
}

export default App;
