import { registerUser } from "../api/api";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setError("");
            setLoading(true);

            await registerUser(formData);
            navigate("/login")




        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false);
        }


    }
    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Create Account</h1>
                <p>Join Shoply and start shopping</p>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && <p className="error">{error}</p>}
                    <label htmlFor="name">Name</label>
                    <input type="text" required name="name" id="name" maxLength={20} onChange={handleOnChange} value={formData.name} />
                    <label htmlFor="email">Email</label>
                    <input type="email" required name="email" id="email" maxLength={100} onChange={handleOnChange} value={formData.email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" required name="password" id="password" minLength={6} maxLength={14} onChange={handleOnChange} value={formData.password} />
                    <button type="submit" disabled={loading}>

                        {loading ? "Registering..." : "Register"}
                    </button>

                </form>
                <div className="login-footer">
                    Already registered?
                    <Link to="/login">Log in to your Account</Link>
                </div>
            </div>
        </div>
    )
}
