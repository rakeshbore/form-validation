import React,{useState} from 'react';
import axios from 'axios';
const Achievements = () =>{
    const [Project, setProject]= useState([{ProjectList:""}]);
    const handlerAddProject=()=>{
        setProject([...Project,{ProjectList:" "}]);
    }
    const [state, setState] = useState({
        title:"",
        date:"",
        organisation:"",
        description:""
   
        });
        const [error, setError] = useState({
            title:"",
            date:"",
            organisation:"",
            description:""
         });

         const validate=(name,value)=>{
            switch(name){
                case "title":
                if(value===""){
                  return "*title is required";
                }else{
                    return ""
                }
                case "date":
                if(value===""){
                  return "*date is required";
                }else{
                    return ""
                }
                case "organisation":
                if(value===""){
                  return "*organisation is required";
                }else{
                    return ""
                }
                case "description":
                if(value===""){
                  return "*description is required";
                }else{
                    return ""
                }
                default:{
                    return ""
                }
            }
        }

       
        const [title,setTitle]=useState("")
        const [organisation,setOrganisation]=useState("")
        const [date,setDate]=useState("")
        const [description,setDescription]=useState("")

        const formHandling=(e)=>{
            setState({
                ...state,
                [e.target.name]:e.target.value
            })
            setError({
     ...error,[e.target.name]:validate(e.target.name,e.target.value),
            })
        }
      
return(
<div>
    <div className="container-fluid">
     <div className="row justify-content-center">
     {/* <h1 className='col-md-8 text-center mt-5'>Achievements</h1> */}
     <div className="  col-md-8 col-12 shadow-lg"  >
        {/* this is form */}
     <form  >
     <div className="row">
     <h4 className='p-3'>Achievements</h4>
         <div className='col-md-12'>
         {Project.map((add,index)=>(
             <div className="form-groups" key={index}>
               <hr className='mt-3' style={{width:"100%",height:"6px",backgroundColor:"#6A2A69"}}></hr>
         {/* <div    className="row ml-2 mr-2  "   id="add"> */}
      <div className="form-group  ml-4 mr-4">
      <label className="form-label">Title</label>
      <input style={{padding:" 27px "}}
       type="text" className="form-control"
       name="title"
       value={title}
       onChange={(e)=>{
       setTitle(e.target.value)
        formHandling(e);
            }}
       placeholder='Title'/>
        <div className="text-danger error ">
        {error.title}
        </div>
      </div>
     <div className="form-group ml-4 mr-4">
      <label  class="form-label">Date</label>
     <input  style={{padding:" 27px "}}
          name="date"
          value={date}
           onChange={(e)=>{
          setDate(e.target.value)
          formHandling(e);
            }}
        className="form-control"
        placeholder='dd-mm-yyyy'/>
        <div className="text-danger error ">
        {error.date}
        </div>
      </div>
  {/* </div> */}
  {/* < div  className="row ml-2 mr-2"> */}
  <div className="form-group  ml-4 mr-4">
    <label class="form-label">Organisation</label>
    <input style={{padding:" 27px "}}
     name="organisation"
     value={organisation}
     onChange={(e)=>{
     setOrganisation(e.target.value)
      formHandling(e);
          }} 
    type="text"
     className="form-control" 
     placeholder='Organisation'/>
     <div className="text-danger error ">
        {error.organisation}
        </div>
    </div>
  <div className="form-froup  ml-4 mr-4" >
  <label   className="form-label">Description</label>
    <textarea
    type="text"
     className="form-control"
     name="description"
     value={description}
     onChange={(e)=>{
     setDescription(e.target.value)
      formHandling(e);
          }}
          rows="4" columns="4"  
      placeholder='description' />
       <div className="text-danger error ">
        {error.description}
        </div>
  </div>
  {/* </div> */}
     {/*this  add plus  */}
     <div className="ml-4 mr-4 mb-5">
   {Project.length-1===index && Project.length < 5 &&(
     <button type="submit"   style={{padding:" 14px "}}
        onClick={handlerAddProject}
          className="   accordion-button  btn btn-secondary btn-block mt-4 mb-4  text-white" style={{backgroundColor:"#6A2A69"}}>
             <i className="bi bi-plus-circle "></i> Add Achievements </button>
             )}
</div>
</div>
         ))}
</div>
</div>
 {/* this is NEXT STEP CODE */}
 {/* <div className="text-center mt-3 mb-5">
 <button type="submit"  style={{padding:" 10px 45px"}} className="btn btn-warning"><h5> Next step <i class="bi bi-arrow-right"></i></h5></button>
 </div> */}
</form>
</div>
</div>
     </div>
</div>
);
};
export default Achievements;