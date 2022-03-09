import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import data from "../components/data.json";
import Select from "react-select";

const Result = () => {
  return (
    <p style={{ color: "green" }}>
      <h5>
        <b>Form Submitted Successfully.....</b>
      </h5>
    </p>
  );
};

const Home = () => {
  const [closemodal, setClosemodal] = useState(false);

  const navigate = useNavigate();

  const [hireandtraindetails, setHireandtraindetails] = useState({
    name: "",
    email: "",
    phone: "",

  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
   
  });

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "*Name is Required";
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
      case "phone":
        if (!value || value.trim() === "") {
          return "*Contact Number is Required";
        } else if (isNaN(value)) {
          return "*Only enter a Numerical Values";
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

      default: {
        return " ";
      }
    }
  };

  const [result, showResult] = useState(false);

  const [name, setFullName] = useState("");
  const [email, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [graduation, setgraduation] = useState("");
  const [passedout, setpassedout] = useState("");
  const [location, setlocation] = useState([]);
  const [skills, setskills] = useState([]);
  const [message, setmessage] = useState("");

  const sendEmail = (e) => {
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

    // emailjs
    //   .sendForm(
    //     "service_uylk7sp",
    //     "template_tawbs7h",
    //     e.target,
    //     "user_8z77GuPEKrnfHaLDyodeg"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // e.target.reset();

    // showResult(true);

    // e.target.reset();

    showResult(true);

    const data = {
      Name: name,
      PhoneNumber: phone,
      Email: email,
      Graduation: graduation,
      Passedout: passedout,
      Location: location,
      Skills: skills,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/d33e221c-71b4-43fb-9f7a-d93a64d21e01",
        data
      )
      .then((res) => {
        console.log(res);
        setFullName("");
        setphone("");
        setmail("");
        setgraduation("");
        setpassedout("");
        setlocation("");
        setskills("");
        setmessage("");
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

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div>
      <div className="container-fluid home_content">
        <div className="row home_content_content">
          <div className="col-lg-4 col-md-4 col-sm-4 home_image_one">
            <div className="row">
              <div className="col-lg-9 col-md-9">
                <img src="images/home_one.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-3 col-md-3 ">
                <div id="arrowAnim" className="home_arrow">
                  <div className="arrowSliding">
                    <div className="arrow"></div>
                  </div>
                  <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                  </div>
                  <div className="arrowSliding delay3">
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-1 col-md-1"></div> */}
          <div className="col-lg-4 col-md-4 col-sm-4 home_text text-center">
            <h1>PAB JOBS</h1>
            <img
              src="images/clipart530434.png"
              className="img-fluid  pr-3 img_office"
            />
          </div>
          {/* <div className="col-lg-1 col-md-1"></div> */}
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div id="arrowAnim" className="home_arrow_two">
                  <div className="arrowSliding">
                    <div className="arrow_two"></div>
                  </div>
                  <div className="arrowSliding delay2">
                    <div className="arrow_two"></div>
                  </div>
                  <div className="arrowSliding delay3">
                    <div className="arrow_two"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <img src="images/home_two.jpg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="home_button">
          {/* <button className="btn btn-primary">Register Now</button> */}

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Register Now
          </button>
        </div>

        {/* <!-- Modal --> */}
        {!closemodal && (
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container main_content">
                    <div className="row">
                      {/* <div className="col-lg-2"></div> */}
                      <div className="col-lg-12">
                        <div className="wrapper_services">
                          <div className="content_hire">
                            <div className="job-bx-title clearfix">
                              <h5
                                className=" pull-left text-uppercase cp"
                                ref={myRef}
                              >
                            
                              </h5>
                            </div>
                            <form action="#" onSubmit={sendEmail}>
                              <div className="row">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group hire_group">
                                    <label>Your Name :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => {
                                          setFullName(e.target.value);
                                          formHandling(e);
                                        }}
                                        // onChange={(e) => formHandling(e)}
                                        // onChange={()=>setFullName(e.target.value)}

                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter Your Name
                                      </span>
                                    </label>
                                  </div>
                                </div>

                                <div className="text-danger error mb-4">
                                  {errors.name}
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group hire_group">
                                    <label>Email :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => {
                                          setmail(e.target.value);
                                          formHandling(e);
                                        }}
                                        // onChange={(e) => formHandling(e)}
                                        // onChange={()=>setmail(e.target.name)}

                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter Your Email
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-danger error mb-4">
                                  {errors.email}
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group hire_group">
                                    <label>Mobile Number :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="phone"
                                        maxLength={10}
                                        value={phone}
                                        onChange={(e) => {
                                          setphone(e.target.value);
                                          formHandling(e);
                                        }}
                                        // onChange={(e) => formHandling(e)}
                                        // onChange={()=>setphone(e.target.name)}

                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your mobile number
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-danger error mb-4 ">
                                  {errors.phone}
                                </div>

                                <div className="col-lg-12">
                                  <label>Qualification :</label>
                                  <label className="input mt-1 mb-2">
                                    <input
                                      className="input__field form_control form_hire"
                                      type="text"
                                      name="graduation"
                                      // pattern="[A-Za-z]"
                                      onChange={(e) =>
                                        setgraduation(e.target.value)
                                      }
                                      value={graduation}
                                      placeholder=" "
                                    />
                                    <span className="input__label">
                                      Enter your Qualification
                                    </span>
                                  </label>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Passed Out Year :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="number"
                                        name="passedout"
                                        onChange={(e) =>
                                          setpassedout(e.target.value)
                                        }
                                        value={passedout}
                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your Passedout
                                      </span>
                                    </label>
                                  </div>
                                </div>

                                {/* <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Location :</label>
                                  <label className="input mt-1 mb-2">
                                    <input
                                      className="input__field form_control form_hire"
                                      type="text"
                                      name="location"
                                      onChange={(e) =>
                                        setlocation(e.target.value)
                                      }
                                      value={location}
                                      placeholder=" "
                                    />
                                    <span className="input__label">
                                      Enter your Location
                                    </span>
                                  </label>
                                </div>
                              </div> */}

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Location :</label>
                                    {/* <Select options={data}> */}
                                    <Autocomplete
                                      multiple
                                      id="tags-outlined"
                                 
                                      // onAdd={(newValue) => {
                                      //   const newArray = [...location, newValue];
                                      //   setlocation(newArray);
                                      // }}

                                      options={data}
                                      getOptionLabel={(option) =>
                                        option.location
                                      }
                                      // defaultValue={[top100Films[13]]}
                                      filterSelectedOptions
                                      renderInput={(params) => (
                                        <TextField
                                       
                                        onChange={(e) =>
                                            setlocation(e.target.value)
                                          }
                                       

                                          value={location}
                                          {...params}
                                          label="Enter Locations"
                                          // placeholder="Favorites"
                                          type="text"
                                          name="location"
                                        />
                                      )}
                                    />
                                    {/* </Select> */}
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Skills:</label>
                                    {/*                                
                                  <ChipInput
                                                    label="Skills"
                                                    variant="outlined"
                                                    helperText="Press enter to add skillssss"
                                                    value={skills.skillsets}
                                                    onChange={setskills}
                                                    onAdd={(chip) =>
                                                      setskills({
                                                        ...skills,
                                                        skillsets: [...skills.skillsets, chip],
                                                      })
                                                    }
                                                    onDelete={(chip, index) => {
                                                      let skillsets = skills.skillsets;
                                                      onChange={setskills}
                                                      skillsets.splice(index, 1);
                                                      setskills({
                                                        ...skills,
                                                        skillsets: skillsets,
                                                      });
                                                    }}
                                                    fullWidth
                                                  />  */}

                                    <ChipInput
                                      label="Skills"
                                      variant="outlined"
                                      value={skills}
                                      onChange={setskills}
                                      alwaysShowPlaceholder={true}
                                      helperText="Press enter to add skillssss"
                                      onAdd={(newVal) => {
                                        const newArr = [...skills, newVal];
                                        setskills(newArr);
                                      }}
                                      onDelete={(deletedVal) => {
                                        const newArr = skills.filter(
                                          (state) => state !== deletedVal
                                        );
                                        setskills(newArr);
                                      }}
                                      fullWidth
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Message :</label>
                                    <label className="input mt-1 mb-2">
                                      <textarea
                                        rows="7"
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="message"
                                        onChange={(e) =>
                                          setmessage(e.target.value)
                                        }
                                        value={message}
                                        maxLength={500}
                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your Message
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <button
                                className="update"
                                onClick={executeScroll}
                              >
                                Submit
                              </button>
                              <div className="row">
                                {result ? <Result /> : null}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      {/* <div className="col-lg-2"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
 