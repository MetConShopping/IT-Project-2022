import {useState , useEffect} from "react";
import {Link , useNavigate} from "react-router-dom";
import axios from "axios";
import "./Slogin.css";
import "./register.css";

const LoginScreen = ()=>{

    const history = useNavigate();

    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [error , setError] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("authToken")){  //push a user if he already logged in
            history("/login");
        }
    } , [history])

    const loginHandler = async (e)=>{
        e.preventDefault();

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/api/auth/login" , {email , password} , config);

            localStorage.setItem("authToken" , data.token);

            history.push("/");

        } catch (error) {
            setError(error.response.data.error);
            setTimeout(()=>{
                setError("");
            } , 5000); //5s
        }
    }

    const  showPassword = () => {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return(
        <div className=" bg0">

           <div className="signup-form " style={{opacity:"0.8" , marginLeft:"230px"}} >
           <form onSubmit={loginHandler} >
               <center> <h2 className="text-center" style={{color:"white"}}>Log in <i class="fa fa-grav" aria-hidden="true"></i></h2></center>   
                {error && <span className="badge bg-warning">{error}</span>}     
                <div className="form-group">
                    <input type="email" style={{width:"350px"}} className="form-control" placeholder="📧 Email" required="required" pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                    value = {email} onChange = {(e)=>setEmail(e.target.value)}
                    />
                </div><br/>
                <div className="form-group">
                    <input type="password" style={{width:"350px"}} className="form-control" placeholder="🔐 Password" required="required" id="myInput"
                    value = {password} onChange = {(e)=>setPassword(e.target.value)}
                    />
                    <br/><br/>
                    <label className="float-left form-check-label"><input type="checkbox" onClick={showPassword} /> Show Password</label>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"><i class="fa fa-leaf" aria-hidden="true"></i> Log in</button>
                </div><br/>
                <div className="clearfix">
                   <Link to="/forgotpassword" className="float-right" style={{textDecoration:"none"}}><b> Forgot Password 🥺?</b></Link>
                   <center><p className="text-center"><Link to="/register" style={{textDecoration : "none",fontSize:"25px"}}><h5><i class="fa fa-cogs" aria-hidden="true"></i> Create an Account</h5></Link></p></center>
                </div>        
            </form>
           
           </div>
        </div>
    )
}

export default LoginScreen;