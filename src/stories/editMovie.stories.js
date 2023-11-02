
import React from 'react';
import Dialog from '../components/Shared/Dialog'; 
import MovieForm from '../components/Shared/MovieForm';

export default {
  title: 'Edit Movie',
  component: Dialog,
};

export const PrefilledMovieForm = () => (
  <Dialog title="Edit Movie">
    <MovieForm
      initialMovieInfo={{
        title: 'Sample Movie',
        director: 'Director Name',
        releaseDate: '2023-01-01',
      }}
      onSubmit={(formData) => {
        console.log('Updated Movie Data:', formData);
      }}
    />
  </Dialog>
);
