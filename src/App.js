import ReactDOM from 'react-dom';
import React, { Component,useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import './App.css';



function App(){
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
  <div>
    <FormInput description="Name" placeholder="Enter your Name" type="text" />
    <FormInput description="Email" placeholder="Enter your Email" type="password"/> 
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
  <div>
         <Fab color="primary" aria-label="add" style={style}>
         <AddIcon onClick={()=>setToken(true)}  />
        </Fab>
      
  </div>
);

}

  export default App;


