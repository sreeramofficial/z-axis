import React from 'react';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const delay = 100;

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  success: {
    // eslint-disable-next-line no-magic-numbers
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    // eslint-disable-next-line no-magic-numbers
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  snackbar: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
});

function MySnackbarContent(props) {
  const { classes, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  return (
    <SnackbarContent
      className={classNames(classes[variant], classes.snackbar)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose} >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other} />
  );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class CustomizedSnackbars extends React.Component {
  state = {
    open: true,
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
    if (this.props.handleErrorClose) setTimeout(() => this.props.handleErrorClose(), delay);
  };

  render() {
    const { variant, message, duration } = this.props;
    return <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={this.state.open}
      autoHideDuration={duration}
      onClose={this.handleClose}>
      <MySnackbarContentWrapper
        onClose={this.handleClose}
        variant={variant}
        message={message} />
    </Snackbar>;
  }
}

export default CustomizedSnackbars;
