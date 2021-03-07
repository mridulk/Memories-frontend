import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch ,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'
const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null)
  useEffect(()=>{
    if(post){
      setPostData(post)
    }
  },[post])
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData)
        if(currentId){
          dispatch(updatePost(currentId,postData))
        }else{
          dispatch(createPost(postData));
        }
        clear();
        
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  };
  return (
    <>
      <Paper className={classes.paper} style={{backgroundColor: 'rgba(0,0,0, 0.6)'}}>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.form} ${classes.root}`}
          onSubmit={handleSubmit}>
          <Typography varient='h6' style={{color:'white'}}>{`${currentId?'Editing':'Creating'}`} a Memory</Typography>
          <TextField
          
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={postData.creator}
            onChange={(e) => {
              setPostData({ ...postData, creator: e.target.value });
            }}
          />
          <TextField
            name='title'
            
            variant='outlined'
            label='Title'
            fullWidth
            value={postData.title}
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
          <TextField
            name='message'
            
            variant='outlined'
            label='Message'
            fullWidth
            value={postData.message}
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value });
            }}
          />
          <TextField
            name='tags'
            className={classes.input}
            variant='outlined'
            label='Tags'
            fullWidth
            value={postData.tags}
            onChange={(e) => {
              setPostData({ ...postData,  tags: e.target.value.split(',') })
            }}
          />
          <div style={{margin:'1rem 0rem' , padding:'0rem',display:'flex',justifyContent:'center'}} >
            <FileBase
          
              type='file'
              key={postData.selectedFile?postData.selectedFile:''}
              multiple={false}
              onDone={({base64}) =>
                setPostData({ ...postData, selectedFile: base64 })
              }></FileBase>
              
          </div>
          
        
          <Button
            fullWidth
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            type='submit'
            size='small'
            >
            Submit
          </Button>
          
          <Button
            className={classes.buttonSubmit}
            fullWidth
            variant='contained'
            color='secondary'
            size='small'
            fullwidth
            onClick={()=>clear()}>
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
