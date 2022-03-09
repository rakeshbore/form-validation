import React,{useState} from 'react'
import ChipInput from "material-ui-chip-input";
import axios from "axios";

const Skills = () => {
// const[state,setState]=useState([{addSkills:""}])
// const handlerAddProject=()=>{
//     setState([...state,{addSkills:''}])

   const [state,setState]=useState({
       skills:"",
   })
   const [error,setError]=useState({
    skills:"",
})

const validate = (name, value) => {
  switch (name) {
    case "skills":
      if (!value || value.trim() === "") {
        return "*Name is Required";
      } else {
        return "";
      }
      case "":
      default: {
        return " ";
      }
    }
  }
// form handling
const formHandling = (e) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
  setError({
    ...error,
    [e.target.name]: validate(e.target.name, e.target.value),
  });
};
// submit
const [skills,setSkills]=useState([]);
const sendEmail =async (e) => {
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
  Skills: skills,
};
 await axios
  .post(
    "http://localhost:5000/data",
    data
  )
  .then((res) => {
    console.log(res);
   
    setSkills("");
   
    // console.log(res);
  })
}
//     document
//       .getElementById("exampleModalCenter")
//       .classList.remove("show", "d-block");
//     document
//       .querySelectorAll(".modal-backdrop")
//       .forEach((el) => el.classList.remove("modal-backdrop"));
//     // e.target.reset();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // navigate("/")
// // e.target.reset();
// // setskills([]);
// };

  return (
    <div>
     
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card shadow-lg'>
                      <div className='card-body'>
                     <div className='row  mt-3'>
                        <div className='col-md-6'>
                        <h3>Skills</h3>
                     </div>
                          
                </div>
             <hr className='mt-3' style={{width:"100%",height:"10px",backgroundColor:"violet"}}></hr>
             <form className='mt-4' action='#' onSubmit={sendEmail}>
                <div class="form-row mt-3">
                <div class="form-group col-md-12">
                
                   {/* {state.map((add,index)=>( */}
                       <div className='form-groups mt-3'>
                <ChipInput
                label="Skills"
                variant="outlined"
                helperText="Press enter to add skillssss" 
                name="skills"
                value={skills}
                alwaysShowPlaceholder={true}
                onChange={setSkills}
                onAdd={(newVal) => {
                  const newArr = [...skills, newVal];
                  setSkills(newArr);
                }}
                onDelete={(deletedVal) => {
                  const newArr = skills.filter(
                    (State) => State !== deletedVal
                  );
                  setSkills(newArr);
                }}
                fullWidth
              
                      />
                {/* //  onChange={(e) => {
                //  setSkills(e.target.value);
                //  formHandling(e);
                //          }}/> */}
            
                 {/* <div className="text-danger error mb-4 ">
                    {error.skills} */}
                 
                   {/* </div> */}
               
                </div>
                </div>
                </div>
                  
                   
                   
              
              <div className="text-center mt-3">
              <button type="submit"  style={{padding:" 10px 45px"}} className="btn btn-warning"><h5> Next step <i class="bi bi-arrow-right"></i></h5></button>
             </div> 
               {/* next step btn close */}
              </form>
            </div>
          
        </div>
      </div>
    </div>
  </div>

 </div>

    
     )
}



export default Skills;