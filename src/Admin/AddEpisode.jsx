import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddEpisode() {
  const navigate = useNavigate();
  const anime_id = localStorage.getItem('film_id');
  const [errorMessage, setErrorMessage] = useState('');
  const [okMessage, setOkMessage] = useState('');
  const [form, setForm] = useState({
    Name: '',
    Episode: '',
    Url_link: '',
  });

  useEffect(() => {
    const namee = localStorage.getItem('film_name');
    if (namee) {
      setForm((prevForm) => ({
        ...prevForm,
        Name: namee,
      }));
    }
  }, []);

  const Add = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://animetangobackend.onrender.com/admin/anime/${anime_id}/episode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setOkMessage(`Add Episode successful: ${data.message}`);
          setTimeout(() => navigate('/admin'), 2500);
        } else {
          setErrorMessage(`Add Episode failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Add Episode failed: ${response.statusText}`);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (okMessage) {
      const timer = setTimeout(() => setOkMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [okMessage]);

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        textAlign: 'center',
        padding: 3,
        borderRadius: 2
      }}
    >
      <h2>Add Episode</h2>
      <TextField
        label="Name"
        value={form.Name}
        disabled
        fullWidth
        margin="normal"
      />
      <TextField
        label="Episode"
        value={form.Episode}
        onChange={(e) =>
          setForm((prevForm) => ({
            ...prevForm,
            Episode: e.target.value,
          }))
        }
        fullWidth
        margin="normal"
      />
      <TextField
        label="URL Link"
        value={form.Url_link}
        onChange={(e) =>
          setForm((prevForm) => ({
            ...prevForm,
            Url_link: e.target.value,
          }))
        }
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={Add}
        sx={{ marginTop: 2 }}
        fullWidth
      >
        Add Episode
      </Button>
      {errorMessage && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {errorMessage}
        </Alert>
      )}
      {okMessage && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          {okMessage}
        </Alert>
      )}
    </Box>
  );
}
