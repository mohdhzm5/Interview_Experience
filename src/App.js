import ReactDOM from 'react-dom';
import React, { Component,useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Fab from '@mui/material/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import Card from "./components/Interview_card";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Data from "./Data.jsx";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function ncards(val){
  return(
    <Card
    image={val.image}
    description={val.description}
    job_pos={val.job_pos}
    dept={val.dept}
    />
     

  );
 
}


function App(){
  
  const classes = useStyles();

  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
  <div>
    <FormInput  placeholder="Enter your Name" type="text" />
    <FormInput  placeholder="Enter your Email" type="text"/> 
    <div className="editor">
    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Write Your Interview Experience !</p>"
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
     </div>
    <FormButton title="Submit"/>
  </div>
);

const FormButton = props => (
 <div id="button" class="row">
   <button>{props.title}</button>
 </div>
);

const FormInput = props => (
 <div class="row">
   <label>{props.description}</label>
   <input type={props.type} placeholder={props.placeholder}/>
 </div>  
);
const [token, setToken] = useState(false);
if(token) {
return(
      
      <div id="loginform">
        <FormHeader title="Interview Experience" />
        <Form />
        
      </div>
  
)
} 
const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};
return(
  <div className="main">
  

    <div className="App">
      <header className="App-header">
      
        {Data.map(ncards)}

      </header>
    </div>

  

         <Fab color="primary" aria-label="add" style={style}>
         <AddIcon onClick={()=>setToken(true)}  />
        </Fab>
      
  </div>
);

}

  export default App;


