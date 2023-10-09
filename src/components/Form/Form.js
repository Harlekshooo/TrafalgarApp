import React, {useRef, useState} from 'react'
import classes from './Form.module.css'
import large from "../../assets/third big image.png"
import google from "../../assets/Google.png"
import facebook from "../../assets/Facebook.png"
import emailjs from "@emailjs/browser"

const Result = () => {
    return (
        <p>Your profile has been successfully created</p>
    )
} 
const Form = () => {
    const [result, showResult] = useState (false, true)
    const form = useRef ()
    const sendEmail = (e) => {
      e.preventDefault();
      
        emailjs.sendForm("service_ig1wa1r", "template_a4ruvt8", form.current, "U2aN1yb56InSLiuiA")
        .then(
          (result) => {
            console.log(result.text);
            console.log("Your profile has been successfully created")
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
      showResult(true);
    };
    setTimeout(() => {
      showResult(false);
     },5000 );
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div className={classes.innerContainerContent}>
                <div className={classes.community}>
                    <div className={classes.topText}>
                        <h2>Welcome to our community</h2>
                        <p>Create account and connect with Plantians</p>
                    </div>
                    <div className={classes.imgContainer}>
                        <img src={large} alt='/'/>
                    </div>
                </div>
                <div className={classes.started}>
                    <div className={classes.secondToptext}>
                        <h2>Get Started</h2>
                        <p>Already have an account?<span>Sign in</span></p>
                    </div>
                    <div className={classes.socials}>
                        <button className={classes.sign}>
                            <img src={google} alt='/'/><span>Sign up with Google</span>
                        </button>

                        <button className={classes.sign}>
                            <img src={facebook} alt='/'/><span>Sign up with Facebook</span>
                        </button>
                    </div>
                    <div className={classes.orContainer}>
                        <hr/><p>or</p><hr/>
                    </div>
                    <div className={classes.bioData}>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label><br/>
                            <input name="user_Name" placeholder='Name' type='text'/><br/>
                            <label>Email</label><br/>
                            <input name="user_Email" placeholder='Email' type='email'/><br/>
                            <label>Password</label><br/>
                            <input name="user_Password" placeholder='Password' type='password'/>
                            <label>Message</label><br/>
                            <input name="message" placeholder='Message' type='text'/>
                            <div className={classes.btnContainer}>
                                <button>Create</button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.row}>{result ? <Result/>: null}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form