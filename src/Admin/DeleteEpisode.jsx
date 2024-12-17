import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DeleteEpisode() {
  const navigate = useNavigate(); // Ensure `useNavigate` is imported
  const anime_id = localStorage.getItem('film_id');
  const [episode_id, setEpisode_id] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [okMessage, setOkMessage] = useState('');

  const Delete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://animetangobackend.onrender.com/admin/anime/${anime_id}/episode/${episode_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          console.log('Remove Episode successful:', data.message);
          setOkMessage(`Remove Episode successful: ${data.message}`);
          setTimeout(() => {
            navigate('/admin');
          }, 2500);
        } else {
          const error__alert = `Remove Episode failed: ${data.message}`;
          console.log(error__alert);
          setErrorMessage(`Remove Episode failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Remove Episode failed: ${response.statusText}`);
        console.error('Error during Remove Episode:', response.statusText);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error}`);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (okMessage) {
      const timer = setTimeout(() => {
        setOkMessage('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [okMessage]);

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center' }}>
      <h2>Delete Episode</h2>
      <TextField
        label="Film ID"
        value={anime_id}
        disabled
        fullWidth
        margin="normal"
      />
      <TextField
        label="Film Name"
        value={localStorage.getItem('film_name')}
        disabled
        fullWidth
        margin="normal"
      />
      <TextField
        label="Episode ID"
        value={episode_id}
        onChange={(e) => setEpisode_id(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="error"
        onClick={Delete}
        disabled={!episode_id}
        sx={{ marginTop: 2, width: 'auto' }}
      >
        Delete Episode
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
