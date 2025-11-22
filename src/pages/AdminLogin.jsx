import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function AdminLogin() {
 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

  const handleLogin = (e) => {
  e.preventDefault();

  const ADMIN_USER = "admin";
  const ADMIN_PASSWORD = "admin123";

  if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    setPassword("")
    setUser("")
    Swal.fire("Success", "Admin logged in successfully!", "success")
    navigate('/view-feedback')
    

  } else {
    Swal.fire("Error", "Invalid admin credentials!", "error");
  }
};


    return (
        <div className=" container my-5">
            <h2 className="text-center mb-4 fw-bold">Admin Login</h2>

            <form className="w-50 mx-auto" onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary w-100" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;
