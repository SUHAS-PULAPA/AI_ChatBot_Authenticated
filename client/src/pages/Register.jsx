import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/api';
import InputField from '../components/InputField'; 
import AuthForm from '../components/AuthForm';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/auth/register', form);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <AuthForm title="Register" onSubmit={handleSubmit}>
      <InputField name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <InputField type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <InputField type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit" className="primary-btn">Register</button>
      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
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