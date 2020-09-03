import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      width: '300px',
      height: '100%',
      textAlign: 'center',
      fontSize: '14px',
    },
    title: {
      width: '100%',
      height: '80px',
      paddingTop: '30px',
      color: 'rgb(157, 157, 157)',
      backgroundColor: 'rgb(246, 246, 246)',
    },
    middle: {
      padding: '20px 10px',
      borderTop: '1px solid rgb(228, 228, 228)',
    },
    input: {
      width: '100%',
      color: 'rgb(66, 54, 48)',
      '& label.Mui-focused': {
        color: 'rgb(255, 192, 47)',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: 'rgb(255, 229, 0)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(255, 192, 47)',
        },
      },
    },
    bottom: {
      '& > *': {
        margin: theme.spacing(1),
      },
      borderTop: '1px solid rgb(228, 228, 228)',
    },
    createBtn: {
      backgroundColor: 'rgb(255, 229, 0)',
      borderRadius: '50px',
      fontSize: '11px',
      color: 'rgb(66, 54, 48)',
      width: '100px',
      border: '1px solid rgb(228, 228, 228)',
    },
    cancelBtn: {
      backgroundColor: 'white',
      borderRadius: '50px',
      fontSize: '11px',
      color: 'rgb(66, 54, 48)',
      width: '100px',
      border: '1px solid rgb(228, 228, 228)',
    },
  })
);

export default function CreateChatroom(props) {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <div className={classes.title}>Create Chatroom</div>
      <div className={classes.middle}>
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Type room name"
          variant="outlined"
          size="small"
          autoComplete="off"
          inputProps={{ style: { fontSize: 12 } }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
      </div>
      <div className={classes.bottom}>
        <Button
          disableElevation
          className={classes.createBtn}
          variant="contained"
        >
          Create
        </Button>
        <Button
          disableElevation
          onClick={() => props.handleClose()}
          className={classes.cancelBtn}
          variant="contained"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}