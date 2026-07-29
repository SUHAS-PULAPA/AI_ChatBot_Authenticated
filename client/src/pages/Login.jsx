import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/api';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/InputField'; 
import AuthForm from '../components/AuthForm';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', form);

      login(res.data.token);
      navigate('/chat');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <AuthForm title="Login" onSubmit={handleSubmit}>
      <InputField type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <InputField type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit" className="primary-btn">Login</button>
      <p className="auth-link">
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </AuthForm>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};