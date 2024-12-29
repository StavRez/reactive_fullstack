import React, { Component } from 'react'
// import "./CssComponents/SignUpForm.css"

export class SignIn extends React.Component {

    constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            showPassword: false
        }
        this.checkUserName = this.checkUserName.bind(this);
        this.checkPassword = this.checkPassword.bind(this);


    }


    checkUserName(event){
        this.setState({userName:event.target.value})
    }

    checkPassword(event){
        this.setState({password:event.target.value})
    }


    onSubmit(event){
        event.preventDefault();

        const registered = { // todo: maybe add 
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        }
    }

    render() {
        return (
            <div>
                        <form onSubmit={this.onSubmit}>
                        <div className='form-div'>
                           <h1>Sign In</h1>
                           <p>Please fill in this form to get in an account.</p>
                            <input type = 'text'
                             placeholder='username'
                             onChange={this.checkUserName}
                             value={this.state.userName}
                             className='form-control form-group'
                             />
                             <input type = 'password'
                             placeholder='password'
                             onChange={this.checkPassword}
                             value={this.state.password}
                             className='form-control form-group'
                             />
                             <input type='submit' className='btn btn-danger btn-block' value='log in'/>
                             <div class="container signin">
                                <p>Dont have an account? <a href="#">Sign up</a>.</p>
                            </div>
                         </div>

                        </form>


                </div>
        )
    }
}

export default SignIn;