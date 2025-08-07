import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, Avatar, Button
} from '@mui/material';
import styles from './UserDialog.module.css'; // Import CSS module

const UserDialog = ({ open, handleClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent>
        <div className={styles.dialogContent}>
          <Avatar src={user.avatar} className={styles.avatar} />
          <Typography variant="h6" className={styles.name}>
            {user.firstname} {user.lastname}
          </Typography>
          <Typography className={styles.role}>Role: {user.role}</Typography>
          <Typography className={styles.joinDate}>Join Date: {user.join_date}</Typography>
          <Typography className={styles.description}>Description: {user.description}</Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;

