import { login } from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""

  })
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setError("");
      setLoading(true);

      await login(formData);

      navigate("/")
    } catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
    }





  }



  if (loading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div className="login-page">
      <div className="login-card">
          <h1>Welcome Back</h1>
      <p>Sign in to continue shopping</p>
      
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" required name="email" id="email" maxLength={100} onChange={handleOnChange} value={formData.email} />

        <label htmlFor="password">Password</label>
        <input type="password" required name="password" id="password" minLength={6} maxLength={14} onChange={handleOnChange} value={formData.password} />
        <button type="submit" disabled={loading}>
          Login
        </button>

      </form>
      <div className="login-footer">
        Don't have an account?
        <Link to="/register">Create Account</Link>
      </div>
</div>
    </div>
  )

}