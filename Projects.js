import React,{useState} from 'react'
const Projects = () => {
    // const [Project, setProject]= useState([{ProjectList:""}]);
    // const handlerAddProject=()=>{
    //     setProject([...Project,{ProjectList:" "}]);
    // }
    const [state, setState] = useState({
     projectname:"",
     projectlink:"",
     keywords:"",
     description:""

     });
     const [error, setError] = useState({
      projectname:"",
      projectlink:"",
      keywords:"",
      description:""
      });
   
      const validate=(name,value)=>{
        switch(name){
            case "projectname":
            if(value===""){
              return "*projectname is required";
            }else{
                return ""
            }
            case "projectlink":
            if(value===""){
              return "*projectlink is required";
            }else{
                return ""
            }
            case "keywords":
            if(value===""){
              return "*keywords is required";
            }else{
              return ""
          }
            case "description":
            if(value===""){
              return "*description is required";
            }
            else{
                return ""
            }
          }
        }
        const [projectname,setProjectname]=useState("")
       const [projectlink,setProjectlink]=useState("")
       const [keywords,setKeywords]=useState("")
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
  return (
    <div>
    <div className="container">
    {/* <h1 className='text-center mt-5'>Project Details</h1> */}
        <div className="row ">
          <div className="col-md-8  m-auto ">
            <div className="card">
              <div className="col-md-6 ">
                <h4 className=" mt-3 ">Project Details</h4>
              </div>
              <div className="col-md-12">
              {/* {Project.map((add,index)=>( */}
                     <hr className='mt-5' style={{width:"100%",height:"5px",backgroundColor:"#6A2A69"}}></hr>
                     <form>
                     <div  className="form-group">
                     <input
                    type="text"
                    name="projectname"
                    value={projectname}
                    onChange={(e)=>{
                    setProjectname(e.target.value)
                     formHandling(e);
                         }}
                    className="form-control p-4"
                    placeholder="Project Name"
                  />
                   <div className="text-danger error ">
                   {error.projectname}
                   </div>
                   </div>
                   <div  className="form-group">
                  <input
                    type="text"
                    name="projectlink"
                    value={projectlink}
                    onChange={(e)=>{
                    setProjectlink(e.target.value)
                   formHandling(e);
                         }}                    
                    className="form-control mt-3 p-4"
                    placeholder="Project Link"
                    
                  />
                    <div className="text-danger error ">
                   {error.projectlink}
                   </div>
                  </div>
                  <input
                    type="text"
                    name="keywords"
                    value={keywords}
                    onChange={(e)=>{
                    setKeywords(e.target.value)
                   formHandling(e);
                         }}                   
                    className="form-control mt-3 p-4"
                    placeholder="Key words"
                    requride
                  />
                  <div className="text-danger error ">
                   {error.keywords}
                   </div>
                  <div  className="form-group">
                  <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e)=>{
                    setDescription(e.target.value)
                   formHandling(e);
                         }}                    
                    className="form-control mt-3" rows="4" columns="4"
                    placeholder="Description"
                  />
                  <div className="text-danger error ">
                   {error.description}
                   </div>
                  </div>
                {/* {Project.length-1===index && Project.length < 4 &&( */}
                    <button
                  className="btn btn-block btn-primary mt-3 p-2 mb-3  text-white" style={{backgroundColor:"#6A2A69"}}>
                 <i class="bi bi-plus-circle"></i>Add Project</button>
                 </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-8 mt-5 m-auto d-flex justify-content-center">
            <button className="btn btn-success btn-large  pl-5 pr-5 mt-3">
              <h6>NEXT</h6>
            </button>
          </div> */}
        </div>
      </div>
    
  )
}
export default Projects;


