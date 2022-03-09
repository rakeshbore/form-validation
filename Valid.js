import React,{useState} from 'react'
 import axios from 'axios';
const Valid = () => {
  
  const [hireandtraindetails, setHireandtraindetails] = useState({
    name: "",
    lastName:"",
     email: "",
    phone: "",
    website:"",
     address:"",
     zipcode:"",
     city:"",

  });

  const [errors, setErrors] = useState({
       name: "",
       lastName:"",
       email: "",
       phone: "",
       website:"",
       address:"",
      zipcode:"",
        city:"",
  });
 
 
        const validate = (name, value) => {
        switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "*Name is Required";
        } else {
          return "";
        }
        case "lastName":
        if (!value || value.trim() === "") {
          return "*Name is Required";
        } else {
          return "";
        }
        case "website":
          if (!value || value.trim() === "") {
            return "*this field is Required";
          } else {
            return "";
          }
      case "email":
         if (!value) {
           return "*Email is Required";
         } else if (!value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/)) {
          return "Enter a valid email address";
        } else {
          return "";
         }
      //const validate = (name, value) => {
    // switch (name) {
      case "phone":
        if (!value || value.trim() === "") {
          return "*Contact Number is Required";
        } else if (isNaN(value)) {
          return "*Only Enter a Numerical Values";
        } else if (!value.match(/^[6-9]/)) {
          return "*Mobile Number Must be start With 6 or 7 or 8 or 9 ";
        } else if (value.length < 10) {
          return "*MobileNumber must be 10 numbers";
        }

        //    else if(value.length>10)
        // {
        //   return "MobileNumber only enter  10 numbers"
        // }
        //  else if(value.length<10)
        // {
        //   return "value must be 10 numbers"
        // }
        else {
          return "";
        }
        case "address":
          if (!value || value.trim() === "") {
            return "*address is Required";
          } else {
            return "";
          }
          case "zipcode":
            if (!value || value.trim() === "") {
              return "*Zipcode is Required";
             } 
             else if (isNaN(value)) {
              return "*Only Enter a Numerical Values";
             }
             else if (value.length<6) {
              return "*MobileNumber must be 6 numbers";
            }
            else {
              return "";
            }
            case "city":
             if (!value || value.trim() === "") {
             return "*Name is Required";
              } else {
               return "";
               }

      default: {
        return " ";
      }
    }
  };
//  form submit
const sendEmail = async(e) => {
  e.preventDefault();
  let validationErrors = {};
  Object.keys(hireandtraindetails).forEach((name) => {
    const error = validate(name, hireandtraindetails[name]);
    if (error && error.length > 0) {
      validationErrors[name] = error;
    }
  });
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }


  const data = {
    FirstName:name,
    LastName:lastName,
    Email: email,
    Phone:phone,
    Website:website,
    Address:address,
    Zipcode:zipcode,
    City:city,
  };
   await axios
    .post(
      "http://localhost:5000/data",
      data
    )
    .then((res) => {
      console.log(res);
      setFullName("");
      setLastname("");
      setphone("");
      setmail("");
      setWebsite("");
      setAddress("");
      setZipcode("");
      setCity("");
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



   const [result, showResult] = useState(false);
   const [phone, setphone] = useState("");
   const [name, setFullName] = useState("");
   const [email, setmail] = useState("");
   const [website, setWebsite] = useState("");
   const [lastName, setLastname] = useState("");
   const [address, setAddress] = useState("");
   const [zipcode, setZipcode] = useState("");
   const [city, setCity] = useState("");
  const formHandling = (e) => {
    setHireandtraindetails({
      ...hireandtraindetails,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
  };

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
                            </div>
                 <hr className='mt-5' 
                style={{width:"100%",height:"10px",backgroundColor:"violet"}}>
                </hr>
                <form className='mt-5' action="#" onSubmit={sendEmail}>
                <div class="form-row ">
              <div class="form-group mb-1 col-md-6">
                <input type="text" 
               name="name"
                 value={name}
                onChange={(e) => {
                setFullName(e.target.value);
                formHandling(e);
                                        }}               
                  class="form-control p-4"
                   placeholder='First Name'
                    />
                <div className="text-danger error ">
                    {errors.name}
                </div>
            </div>
            <div class="form-group col-md-6 ">
            <input type="text"
             name="lastName"
             value={lastName}
            onChange={(e) => {
            setLastname(e.target.value);
            formHandling(e);
                                    }}  
            class="form-control p-4"
             placeholder='Last Name'
              />
               <div className="text-danger error ">
                    {errors.lastName}
                    </div>
            </div>
          </div>
            <div class="form-group ">
            <input type="email" 
            name="email"
            value={email}
             onChange={(e) => {
             setmail(e.target.value);
             formHandling(e);
                     }}
          class="form-control p-4"
           placeholder="Email Address"/>
             <div className="text-danger error mb-4">
                {errors.email}
         </div>
         </div>
       <div class="form-group mt-4">
 
         <input type="text"
            name="phone"
            maxLength={10}
           value={phone}
           onChange={(e) => {
          setphone(e.target.value);
          formHandling(e);
                            }}
         class="form-control p-4"
          id="remove"  placeholder="Phone Number"/>

        <div className="text-danger error mb-4 ">
        {errors.phone}
        </div>
         </div>
          <div class="form-group mt-4 ">
      
         <input type="text"
          name="website"
          value={website}
         onChange={(e) => {
         setWebsite(e.target.value);
         formHandling(e);
                                 }}
          class="form-control p-4"
         placeholder='Professional Profile/Website'/>
          <div className="text-danger error mb-4 ">
        {errors.website}
        </div>
         </div>
          {/* <div class="collapse" id="collapseExample">  */}
           
           <div class="form-group mt-4 ">
            <input type="text"
            name="address"
            value={address}
             onChange={(e) => {
             setAddress(e.target.value);
             formHandling(e);
                     }}
             class="form-control p-4" 
             placeholder='Address'/>
             <div className="text-danger error mb-4 ">
        {errors.address}
        </div>
            </div>
              <div class="form-row">
           <div class="col">
           <input type="text"
            maxLength={6}
           name="zipcode"
           value={zipcode}
          //  maxLength={6}
            onChange={(e) => {
            setZipcode(e.target.value);
            formHandling(e);
                    }}
           class="form-control p-4"
           placeholder="Zip code"/>
           <div className="text-danger error mb-4 ">
        {errors.zipcode}
        </div>
           </div>
          <div class="col">
          <input type="text"
          name="city"
          value={city}
           onChange={(e) => {
           setCity(e.target.value);
           formHandling(e);
                   }}
           class="form-control p-4"
           placeholder="City/Town"/>
           <div className="text-danger error mb-4 ">
        {errors.city}
        </div>
          </div>
          </div>
          {/* </div>  */}
         
          {/* <p> 
         <button class="btn btn-light mt-3" 
          style={{width:"100%"}} 
           type="button" 
           data-toggle="collapse" 
           data-target="#collapseExample"  >
            Add additional information
          </button>
       </p> */}

       <div className="text-center mt-3">
       <button type="submit" 
        style={{padding:" 10px 45px"}}
        className="btn btn-warning">
        <h5> Next step <i class="bi bi-arrow-right"></i></h5>
        </button>
       </div> 
        </form>
        </div>
        </div>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Valid