import React from 'react';
import Dialog from '../Dialog'; // Import your components here

export default {
  title: 'Add Movie',
  component: Dialog,
};

export const EmptyMovieForm = () => (
  <Dialog title="Add Movie">
    {/* Render an empty MovieForm */}
    {/* You can also add a submit button that calls a handler to add the movie */}
  </Dialog>
);