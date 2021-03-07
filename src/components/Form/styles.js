import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      color:'white'
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    "& .MuiFormLabel-root": {
      color: 'rgba(0,183,255, 1)' // or black
    },
    input:{
      color:'white'
    }
  },

  paper: {
    padding: theme.spacing(2),
    color:'white'
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color:'white',
    borderRadius:'5px',
    border:'2px solid white',
    padding:'0.25rem'
  },

  buttonSubmit: {
    marginBottom: 10,
  },
}));