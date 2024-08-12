import React from "react";

const Login = (props) => {
    return(
        <div className="bg-login" >
            <form class="formlogin shadow-lg p-3 mb-5 bg-body-tertiary rounded" novalidate>
                <div>
                    <img className="imglogin" src={require("./logo3.png")} alt="Hình 1"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><strong><i class="bi bi-person-fill"/> Username</strong></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your username here"/>
                </div>
                    <label for="inputPassword5" class="form-label"><strong><i class="bi bi-pass-fill"/> Password</strong></label>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter your username here"/>
                    <a className="forgot" href="#">Forgot password</a>
                    <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                 <div class="loginbtn">
                    <a class="btn btn-success m-2" href="homes" role="button"><strong>LOGIN <i class="bi bi-box-arrow-in-right"/></strong></a>
            </div>
            </form>
        </div>
    )
}
export default Login;