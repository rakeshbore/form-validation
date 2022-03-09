import React,{useState} from 'react'
const Experiance = () => {

  const [school, setSchool]= useState([{schoolList:""}]);
    const handlerAddSchool=()=>{
        setSchool([...school,{schoolList:" "}]);
    }
  const [state, setState] = useState({
    title:"",
    organisation:"",
    startdate:"",
    enddate:"",
    roles:"",

   });
   const [error, setError] = useState({
    title:"",
    organisation:"",
    startdate:"",
    enddate:"",
    roles:"",
    });
 
    const validate=(name,value)=>{
        switch(name){
            case "title":
            if(value===""){
              return "*title is required";
            }else{
                return ""
            }
            case "organisation":
            if(value===""){
              return "*organisation is required";
            }else{
                return ""
            }
            case "startdate":
            if(value===""){
              return "*startdate is required";
            }else{
                return ""
            }
            case "enddate":
            if(value===""){
              return "*end date is required";
            }else{
                return ""
            }
            case "roles":
            if(value===""){
              return "*roles & responsibilities is required";
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
            const [startdate,setStartdate]=useState("")
            const [enddate,setEnddate]=useState("")
            const [roles,setRoles]=useState("")
           
     
            const formHandling=(e)=>{
                setState({
                    ...state,
                    [e.target.name]:e.target.value
                })
                setError({
         ...error,[e.target.name]:validate(e.target.name,e.target.value),
                })
            }

    
    

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 m-auto'>
        <div className='card '>
        <div className='card-body '>
          <div className='row'>
            <div className='col-sm-6'>
            <h4>Experience Details</h4>
            </div>
        </div>
        {school.map((add,index)=>(
      <form key={index} >
         <hr className='mt-5' style={{width:"100%",height:"5px",backgroundColor:"#6A2A69"}}></hr>
      <div className="form-group">
     <label >Title</label>
     <input type="text"
     name="title"
     value={title}
    onChange={(e) => {
    setTitle(e.target.value);
    formHandling(e);
                            }}   
    className="form-control p-4"
      placeholder="Title"/>
      <div className="text-danger error ">
        {error.title}
    </div>
  </div>
  <div class="form-group">
    <label >Organisation</label>
    <input type="text"
    className="form-control p-4" 
    name="organisation"
    value={organisation}
    onChange={(e) => {
     setOrganisation(e.target.value);
    formHandling(e);
             }}   
    placeholder="Organisation"
    />
    <div className="text-danger error ">
    {error.organisation}
    </div>
  </div>
  <div className="form-group">
    <label>Start Date</label>
    <input type="date"
    className="form-control p-4"
    name="startdate"
    value={startdate}
    onChange={(e) => {
     setStartdate(e.target.value);
    formHandling(e);
             }}   
    />
    <div className="text-danger error ">
    {error.startdate}
    </div>
  </div>
  <div className="form-group">
    <label >End Date</label>
    <input type="date"
    className="form-control p-4" 
    name="enddate"
    value={enddate}
    onChange={(e) => {
     setEnddate(e.target.value);
    formHandling(e);
             }}  
   />
   <div className="text-danger error ">
    {error.enddate}
    </div>
  </div>
  <div className="form-froup  " >
  <label  className="form-label">Roles & responsibilities</label>
    <textarea  
    type="text" 
    className="form-control 
     " rows="3" columns="3"  placeholder='Textarea'
     name="roles"
    value={roles}
    onChange={(e) => {
     setRoles(e.target.value);
    formHandling(e);
             }} 
     />
     <div className="text-danger error ">
     {error.roles}
    </div>
  </div>
  {/* <p>
  <div className="collapse" id="collapseExample">
 <form className="needs-validation" novalidate>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" className="form-control" id="validationCustom01" value="Mark" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div className="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <select className="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div className="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" className="form-control" id="validationCustom05" required/>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
</form>
</div>
</p> */}
{/* <button className="btn btn-primary w-100 " type="button"
 data-toggle="collapse"
 data-target="#collapseExample"
 aria-expanded="false"
 aria-controls="collapseExample">
Additional information
  </button>  */}
  {/* <div className='d-flex flex-row-reverse'>
  <button type='submit' className='btn-info m-1' style={{backgroundColor:"#6A2A69"}}>
    <i className="fas fa-plus"></i></button >
    </div> */}
    {school.length-1===index && school.length < 4 &&(
    
    
  <button type="submit" className="btn btn-info mt-2" onClick={handlerAddSchool} style={{backgroundColor:"#6A2A69"}}>Next step</button>
  
 )} 
</form>
         ))}
</div>
</div>
</div>
</div>
{/* <div className='container '>
  <div className='row'>
    <div className='col-md-6 mx-auto '>
    <button type='button' className='btn btn-success mt-5'> <a>NEXT STEP </a> </button>
    </div>
  </div>
</div> */}
</div>
    </>
  )
}
export default Experiance;







