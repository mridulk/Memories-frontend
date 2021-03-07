import React ,{useState}from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from '@material-ui/core';
import moment from 'moment'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import {deletePost} from '../../../actions/posts'
const Post = ({ post,setCurrentId }) => {
  const classes = useStyles();
  const dispatch=useDispatch();
  return (
    <>
      <Card  className={classes.card} style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography varient='h6'>{post.creator}</Typography>
          <Typography varient='body2'>
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize='default' />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography varient='body2' style={{color: 'rgba(0,183,255, 1)'}}>
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        
        <CardContent>
        <Typography className={classes.title} style={{color: 'rgba(0,183,255, 1)',fontSize:'1.25rem'}} gutterButton>
            {post.title}
          </Typography>
          <Typography  style={{color:'white',fontSize:'1rem'}}  varient='h6' gutterButton>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size='small' style={{color: 'rgba(0,183,255, 1)'}} >
            <ThumbUpAltIcon fontSize='' />
            {post.likeCount}
          </Button>
          <Button onClick={() => dispatch(deletePost(post._id))} size='large' style={{color: 'red'}} >
            <DeleteIcon fontSize='' />
          
          </Button>
        </CardActions>
        
      </Card>
    </>
  );
};

export default Post;
