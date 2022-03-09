
import React,{useState} from 'react'
import { useForm } from "react-hook-form";

function PersonalValid() {
    // this is only numbers
const [text, setText] = useState({value:""});
      const allowText=(e)=>{
           setText({inputText:e.target.value.replace(/^[6-9]\d{9}$/ig,'')})
      }
    

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  // console.log(watch());

  // console.log(errors.name)

  return (
    <div>
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-10'>
               <div className='card shadow-lg'>
                  <div className='card-body'>
                     <div className='row  mt-3'>
                        <div className='col-md-6'>
                          <h3>Personal Details</h3>
                          </div>
                     <div className='col-md-6 d-flex justify-content-end'> 
                     <p className='mt-3'>Resume Language</p>
                     <div class="btn-group">
                     <button type="button"
                     class="btn btn-secondary dropdown-toggle" 
                     data-toggle="dropdown"
                     aria-expanded="false">
                      English
                     </button>

                 <div class="dropdown-menu dropdown-menu-right">
                 <button class="dropdown-item " type="button">English</button>
                 <button class="dropdown-item" type="button">Telugu</button>
                 < button class="dropdown-item" type="button">Hindi</button>
                 </div>
                 </div>  
                            </div>
                            </div>
                            <hr className='mt-5' style={{width:"100%",height:"10px",backgroundColor:"violet"}}></hr>
                      <form className='mt-5'>
                <div class="form-row mt-3">
                <div class="form-group col-md-6">
     
                <input type="text" 
                 {...register("name", { required: "Name is Required" })}
                  onKeyUp={() => {
                  trigger("name");
                  }}
                 class="form-control p-4"
                  placeholder='First Name' />
                  {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
              )}
             </div>
            <div class="form-group col-md-6 ">
      
            <input type="text" class="form-control p-4" placeholder='Last Name' />
            </div>
          </div>
        <div class="form-group mt-2">
   
          <input type="email" class="form-control p-4" placeholder="Email Address" />
         </div>
          <div class="form-group mt-4">
 
          <input type="text"
           value={text.inputText} onChange={allowText}
          maxlength="10"
          {...register("phone", { required: "Phone is Required",
                pattern: {
                  value:/^[6-9]\d{9}$/,
                  message: "Invalid phone number",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
           class="form-control p-4"
          id="remove"  placeholder="Phone Number"
         
         />
         {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
         </div>
          <div class="form-group mt-4 ">
      
         <input type="text" class="form-control p-4" placeholder='Professional Profile/Website'/>
         </div>
         <div class="collapse" id="collapseExample">
           
           <div class="form-group mt-4 ">
            <input type="text" class="form-control p-4" placeholder='Address'/>
              </div>
              <div class="form-row">
    <div class="col">
      <input type="text" class="form-control p-4" placeholder="Zip code"/>
    </div>
    <div class="col">
      <input type="text" class="form-control p-4" placeholder="City/Town"/>
    </div>
  </div>
         </div>
         <p> 
  
  <button class="btn btn-light mt-3" style={{width:"100%"}} type="button" data-toggle="collapse" data-target="#collapseExample"  >
       Add additional information
     </button>
       </p>

       <div className="text-center mt-3">
       <button type="submit"  style={{padding:" 10px 45px"}} className="btn btn-warning"><h5> Next step <i class="bi bi-arrow-right"></i></h5></button>
       </div> 
       
        </form>
          </div>
          </div>
        
       </div>
       </div>
     
       </div>
    </div>
  );
}

export default PersonalValid;