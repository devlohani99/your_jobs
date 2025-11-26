import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { API_BASE_URL } from "../../config/environment";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  // Quick fill functions for test users
  const fillJobSeeker = () => {
    setEmail("j@gmail.com");
    setPassword("12345678");
    setRole("Job Seeker");
  };

  const fillEmployer = () => {
    setEmail("e@gmail.com");
    setPassword("12345678");
    setRole("Employer");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/v1/user/login`,
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Login successful, user data:", data);
      toast.success(data.message);
      
      // Set user data from login response first
      if (data.user) {
        console.log("Setting user data:", data.user);
        setUser(data.user);
      }
      
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      console.error("Login error:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <h1 style={{
              color: '#4F46E5',
              fontSize: '2.5rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              YourJobs
            </h1>
            <h3>Login to your account</h3>
            <div style={{
              background: 'linear-gradient(135deg, #EEF2FF, #F3F4F6)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '14px',
              border: '1px solid #E5E7EB'
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#374151' }}>Test Users:</p>
              <p style={{ margin: '4px 0', color: '#6B7280' }}>
                <strong>Job Seeker:</strong> j@gmail.com / 12345678
              </p>
              <p style={{ margin: '4px 0', color: '#6B7280' }}>
                <strong>Employer:</strong> e@gmail.com / 12345678
              </p>
              <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                <button 
                  type="button"
                  onClick={fillJobSeeker}
                  style={{
                    padding: '4px 8px',
                    fontSize: '12px',
                    background: '#3B82F6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Use Job Seeker
                </button>
                <button 
                  type="button"
                  onClick={fillEmployer}
                  style={{
                    padding: '4px 8px',
                    fontSize: '12px',
                    background: '#10B981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Use Employer
                </button>
              </div>
            </div>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  
                  <option value="Job Seeker">Employer</option>
                  <option value="Employer">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;
