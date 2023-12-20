import React,{ useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login () {
     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const login = event => {
        
        event.preventDefault(); //this stops the refresh.
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in...
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    const register = event => {
        event.preventDefault(); //this stops the refresh.
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
     return (
         <div className="login">
             <img
              className="login__logo"
              src=""
              alt=""
              />
              <div className="login__container">
                  <h1>Sign In</h1>
                  <form>
                  <h5>E-mail</h5>
                  <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                  <h5>Password</h5>
                  <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                  <button onClick={login}>Sign In</button>
                  </form>
                  <p>
                      By signing-in we agree to all the terms and policies of the website.
                  </p>
                  <button onClick={register}>Create your account</button>
              </div>
         </div>
     );

}

export default Login;