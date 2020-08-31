import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      border: '1px solid gold',
      outline: 0
    }
  },
  paper: {
    backgroundColor: 'rgb(100,100,100,0.2)',
    border: '1px solid gold',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    width: '300px',
    height: '300px',
    borderRadius: '3px',
    fontSize: '11px',
    '&:focus': {
      border: '1px solid gold',
      outline: 0
    }
  },
  menuButtonBox: {
    marginTop: '33%'
  },
  buttonBox: {
    margin: '18%'
  },
  title: {
    color: 'white',
    fontSize: '24px',
    marginTop: '15px'
  },
  startButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 4,
    border: 0,
    color: 'black',
    padding: '0 30px',
    height: '40px',
    width: '160px'
  },
  rankingButton: {
    background: 'linear-gradient(135deg, #b7e7b3 0%, #dbe250 100%)',
    borderRadius: 4,
    border: 0,
    color: 'black',
    padding: '0 30px',
    height: '40px',
    width: '160px'
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function Menu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  let element = {}
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  switch(props.category) {
    case 'menu':
      element = (
        <div className={classes.paper}>
          <div className={classes.title}>SORT BLOCKS IN ASCENDING ORDER</div>
          <div className={classes.menuButtonBox}>
            <Button
              onClick={() => props.start()}
              className={clsx(classes.startButton)}
              variant="outlined" color="secondary">
              Start
            </Button>
          </div>
        </div>
      )
      break;
    case 'win':
      element = (
        <div className={classes.paper}>
          <div className={classes.title}>CONGRATS!</div>
          <div className={classes.buttonBox}>
            <Button
              onClick={() => props.next()}
              className={clsx(classes.startButton)}
              variant="outlined" color="secondary">
              Next
            </Button>
          </div>
          <div>
            <Button
              onClick={() => props.startOver()}
              className={classes.rankingButton}
              variant="outlined" color="secondary">
              Start Over
              </Button>
          </div>
        </div>
      )
      break;
    case 'gameover':
      element = (
        <div className={classes.paper}>
          <div className={classes.title}>GAME OVER!</div>
          <div className={classes.menuButtonBox}>
            <Button
              onClick={() => props.startOver()}
              className={clsx(classes.startButton)}
              variant="outlined" color="secondary">
              Start Over
            </Button>
          </div>
        </div>
      )
      break;
    default:
      element = (
        <div className={classes.paper}>
          <div className={classes.title}>MOVE BLOCKS TO SORT THEM IN ASCENDING ORDER</div>
          <div className={classes.buttonBox}>
            <Button
              onClick={() => props.start()}
              className={clsx(classes.startButton)}
              variant="outlined" color="secondary">
              Start
            </Button>
          </div>
          <div>
            <Button
              className={classes.rankingButton}
              variant="outlined" color="secondary">
              Ranking
            </Button>
          </div>
        </div>
      )
      break;
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade
          in={open}
          style={{outline: 0}}>
          {element}
        </Fade>
      </Modal>
    </div>
  );
}
