import React,{useState} from 'react'

const Personal = () => {

    const [value,setValue]=useState({
      name:"",
      // email:'',
      phone:"",
    })
     const [error,setError]=useState({
      name:"",
      // email:'',
      // password:"",
      // cpassword:"",
      phone:"",
     })
     
     const validate=( name,value)=>{
      switch(name){
        case "name":
          if(value===""){
            return "name is required"
          } 
           else if(!value==="[^A-Za-z]"){
            return " only enter a latter" 
          } 
           else if(value.length<10){
            return " enter a ten latters only" ;
          } 
          case "phone":
            if(value===""){
              return "required phone number";
            }else if(isNaN(value)){
             return "enter a number only"
            }else if(!value.match(/^[6-9]/)){
              return " number start with 6 or 7 or 8 or 9";
             }else if(value.length<10){
              return "mobile number contains only 10 digits"
             }
             else{
               return ""
             };

             default:{
               return "";
             }

      }
     }

const [name,setName]=useState("");
const [phone,setPhone]=useState("");



// handling
  const handling=(e)=>{
    setValue({
      ...value,[e.target.name]:e.target.value
    })
    setError({
      ...error,[e.target.name]:validate(e.target.name,e.target.value),
    });
  } 
     


  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
              <div className='col-md-10 text-center'>
                <h1>Form Validation</h1>
              </div>
             </div>
            <div className='row '>
                <div className='col-md-10 '>
                    <div className='card shadow-lg '>
                        <div className='card-body '>
                           <div className='d-flex justify-content-center'>
                          <div className=' col-md-8'>
                            <form className="">
                          <div className=' form-group'>
                           <input type="text"
                           placeholder='enter your name'
                           className='form-control'
                           name="name"
                           value={name}
                           onChange={(e)=>{setName(e.target.value);
                           handling(e)}}/>
                           <div className="text-danger error ">
                            {error.name}
                              </div>
                         </div>
                         <div className=' form-group'>
                           <input type="text"
                           placeholder='enter your phone number'
                           className='form-control'
                           name="phone"
                           value={phone}
                           onChange={(e)=>{setPhone(e.target.value);
                           handling(e)}}/>
                            <div className="text-danger error ">
                            {error.phone}
                              </div>
                         </div>
                         <div className=' form-group'>
                           <input type="text"
                           placeholder='enter your name'
                           className='form-control'/>
                         </div>
                         <div className=' form-group'>
                           <input type="text"
                           placeholder='enter your name'
                           className='form-control'/>
                         </div>
                         <div className=' form-group'>
                           <input type="text"
                           placeholder='enter your name'
                           className='form-control'/>
                         </div>
                         </form>
                         </div> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Personal