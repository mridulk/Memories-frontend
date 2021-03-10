import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Post from './components/Posts/Posts';
import useStyles from './styles';
import { getPosts } from './actions/posts';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import { useDispatch } from 'react-redux';
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth='lg'>
      <AppBar
        className={classes.appBar}
        position='static'
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          boxShadow: '7px 9px 8px -1px rgba(255,255,255,0.75)',
        }}>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          className={classes.mainContent}
          justify='space-between'
          align-items='stretch'
          spacing={3}>
          <Grid item xs={12} md={8} sm={12}>
            <Post setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
