import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, Alert } from '@mui/material';
import './Login.css';
import { login } from '../Api/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'ClaimeasePro | Login';
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await login({ username, password });
      if (response.status === 200) {
        navigate('/form');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };
  const handleScreenClick = () => {
    navigate('/form'); // Navigate to EntryForm
  };

  return (
    <>
      <div className="spin-x-container" onClick={handleScreenClick}>
        <div className="video-content">
          <div className="app-title-loop">
            <h1>Claimease <span>Pro</span></h1>
          </div>

          <div className="video-background">
            <video autoPlay loop muted>
              <source src="/assets/clainease-pro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

    </>
  );
}