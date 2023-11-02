import React from 'react';
import Dialog from '../components/Shared/Dialog';

export default {
  title: 'Delete Movie',
  component: Dialog,
};

export const DeleteMovieDialog = () => (
  <Dialog title="Delete Movie">
    <p>Are you sure you want to delete this movie?</p>
    <button>Confirm Delete</button>
    <button>Cancel</button>
  </Dialog>
);