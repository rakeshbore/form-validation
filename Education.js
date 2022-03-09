import React,{useState} from 'react'
import axios from "axios";
const Education = () => {
    const [state, setState] = useState({
       university:"",
       degree:"",
       passedoutyear:"",
       percentage:"",
      });
      const [error, setError] = useState({
        university:"",
        degree:"",
        passedoutyear:"",
        percentage:"",
       });
    

       const validate=(name,value)=>{
           switch(name){
               case "university":
               if(value===""){
                 return "*university is required";
               }else{
                   return ""
               }
               case "degree":
               if(value===""){
                 return "*degree is required";
               }else{
                   return ""
               }
               case "passedoutyear":
               if(value===""){
                 return "*passed out year is required";
               }
               else if (isNaN(value)) {
                return "*Only Enter a Numerical Values";
               }
               else if (value.length<4) {
                return "*  year must be 4 numbers";
              }
               else{
                   return ""
               }
               case "percentage":
               if(value===""){
                 return "*percentage is required";
               }
               else if (value.length<4) {
                return "*percetage must be below three digits only";
              }
               else{
                   return ""
               }
           }
       }

       const [university,setUniversity]=useState("")
       const [degree,setDegree]=useState("")
       const [passedoutyear,setPassedoutyear]=useState("")
       const [percentage,setPercentage]=useState("")

       const formHandling=(e)=>{
           setState({
               ...state,
               [e.target.name]:e.target.value
           })
           setError({
    ...error,[e.target.name]:validate(e.target.name,e.target.value),
           })
       }

    //    form submit
    const sendEmail = async(e) => {
        e.preventDefault();
        let validationErrors = {};
        Object.keys(state).forEach((name) => {
          const error = validate(name, state[name]);
          if (error && error.length > 0) {
            validationErrors[name] = error;
          }
        });
        if (Object.keys(validationErrors).length > 0) {
          setError(validationErrors);
          return;
        }
  
    
        const data = {
           University:university,
           Degree:degree,
           Passedoutyear:passedoutyear,
           Percentage:percentage
        };
       await axios
          .post(
            "http://localhost:5000/data" ,
            data
          )
          .then((res) => {
            console.log(res);
            setUniversity("")
            setDegree("")
            setPassedoutyear("")
            setPercentage("")
            console.log(res);
            document
              .getElementById("exampleModalCenter")
              .classList.remove("show", "d-block");
            document
              .querySelectorAll(".modal-backdrop")
              .forEach((el) => el.classList.remove("modal-backdrop"));
            // e.target.reset();
          })
          .catch((err) => {
            console.log(err);
          });
        // navigate("/")
        // e.target.reset();
        // setskills([]);
      };
    
      
     
  return (
    <>
    <div className='container mt-5'>
    <h1 className='text-center'>Educational  Details</h1>
      <div className='row  '>
        <div className='col-md-8 m-auto'>
        <div className='card '>
          <div className='card-body'>
          <div className='row'>
            <div className='col-sm-6'>
            <h4>Educational Details</h4>
            </div>
        {/* <div className='col-sm-6 d-flex flex-row-reverse'>
        <div className="btn-group" >
  <button type="button"
  className="btn  btn-secondary dropdown-toggle"
   data-toggle="dropdown"
  aria-haspopup="true"
  aria-expanded="false"
  style={{backgroundColor:"#6A2A69"}} >
    english
  </button>
  <div className="dropdown-menu dropdown-menu-right"style={{backgroundColor:"#6A2A69"}}>
    <button className="dropdown-item" type="button">English</button>
    <button className="dropdown-item" type="button">Telugu</button>
    <button className="dropdown-item" type="button">Hindhi</button>
  </div>
</div>
          <p className='m-2'> Resume language</p>
        </div> */}
        </div>
      <form onSubmit={sendEmail}>
         <hr className='mt-5' style={{width:"100%",height:"5px",backgroundColor:"#6A2A69"}}></hr>
    <div className="form-group">
    <label>University</label>
    <input type="text"
    name="university"
    value={university}
    onChange={(e)=>{
        setUniversity(e.target.value)
        formHandling(e);
    }}
     className="form-control p-4" 
     placeholder="University"/>
     <div className="text-danger error ">
            {error.university}
        </div>
      </div>
     <div className="form-group">
    <label >Degree</label>
    <input type="text" className="form-control p-4"
       placeholder='degree'
       name="degree"
       value={degree}
       onChange={(e)=>{
        setDegree(e.target.value)
        formHandling(e);
    }}
       />
       <div className="text-danger error ">
            {error.degree}
        </div>
     </div>
    <div className="form-group">
    <label >PassedOut year</label>
    <input type="text" className="form-control p-4"
    maxLength={4}
    name="passedoutyear"
    value={passedoutyear}
    onChange={(e)=>{
     setPassedoutyear(e.target.value)
     formHandling(e);
 }}
       placeholder='passed out year' />
       <div className="text-danger error ">
            {error.passedoutyear}
        </div>
  </div>
  {/* <div className="form-group">
    <label for="exampleInputPassword1">End Date</label>
    <input type="date" className="form-control  p-4" id="exampleInputPassword1" required/>
  </div> */}
  <div className="form-group">
    <label >GPA or Percentage</label>
    <input type="text" className="form-control
      p-4" id="exampleInputPassword1"
      name="percentage"
      maxLength={3}
      value={percentage}
      onChange={(e)=>{
       setPercentage(e.target.value)
       formHandling(e);
   }}
       placeholder="GPA or Percenteg" />
        <div className="text-danger error ">
            {error.percentage}
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
      <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" className="form-control" id="validationCustom03" required/>
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
      <input type="text" class="form-control" id="validationCustom05" required/>
      <div classNames="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
</form>
</div>
</p> */}
  <div className='mt-5' >
  <button type="submit"
  className="btn btn-info"  
  style={{backgroundColor:"#6A2A69"}}><i class="bi bi-plus-circle"></i>Add School</button>
  </div>
</form>
</div>
</div>
</div>
</div>
{/* <div className='container '>
  <div className='row'>
    <div className='col-md-6 mx-auto '>
    <button type='button' className='btn btn-success mt-5'>NEXT STEP  </button>
    </div>
  </div>
</div> */}
</div>
    </>
  )
}
export default Education;