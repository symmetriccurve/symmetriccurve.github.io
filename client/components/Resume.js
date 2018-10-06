import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: theme.mixins.gutters({
    //paddingTop: 16,
    //paddingBottom: 16,
    //marginTop: theme.spacing.unit * 3,
  }),
  button: {
   margin: theme.spacing.unit,
 }
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <Typography type="headline" component="h3">
          Vikram Belde
        </Typography>
        <Typography component="h2" type="headline">
          a Common Javascipt Developer with love for React EcoSystem !!
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
