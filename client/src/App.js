import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import AdminLayout from "./components/AdminLayout";
import AdminHome from "./pages/AdminDashboard";
import UserLogin from "./pages/UserLogin";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  // return (
  //   <div className="App">
  //     <h1>{message}</h1>
  //   </div>
  // );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="admin/" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="userlogin" element={<UserLogin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
