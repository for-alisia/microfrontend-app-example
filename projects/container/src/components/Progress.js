import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => createStyles({
  bar: {
    width: '100%',
  }
}));

export const Progress = () => {
  const classes = useStyles();

  return (
      <div className={classes.bar}>
        <LinearProgress />
      </div>
    );
};

export default Progress;
