import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
}));

const TasksProgress = ({title = "title", succeded = "0", failed= "0"}) => {
  let total =  succeded + failed;
  let progress = succeded * 100 / total;
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {title}
            </Typography>
            <Typography variant="h3">{progress}%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={progress}
          variant="determinate"
        />
        <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="body2"
        >

          Files OK {succeded}, Files failed {failed}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default TasksProgress;
