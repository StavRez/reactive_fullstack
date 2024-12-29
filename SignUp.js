import React, { Component } from 'react'
import "./CssComponents/SignUpForm.css"

export class SignUp extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            userName: '',
            email: '',
            password: '',
            gender: '',
            weight: '',
            height: '',
            showPassword: false
        }
        this.changeName = this.changeName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeWeight = this.changeWeight.bind(this);
        this.changeHeight = this.changeHeight.bind(this);

    }

    changeName(event){
        this.setState({name:event.target.value})
    }

    changeUserName(event){
        this.setState({userName:event.target.value})
    }

    changeEmail(event){
        this.setState({email:event.target.value})
    }

    changePassword(event){
        this.setState({password:event.target.value})
    }

    changeGender(event){
        this.setState({gender:event.target.value})
    }

    changeWeight(event){
        this.setState({weight:event.target.value})
    }

    changeHeight(event){
        this.setState({height:event.target.value})
    }

    onSubmit(event){
        event.preventDefault();

        const registered = { // todo: maybe add 
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        }
        try{
             axios({
                method: "post",
                data: {
                    userName: registered.userName,
                    password: registered.password
                },
                withCredentials: true,
                url:'http://localhost:5000/login'
            }).then((res)=>console.log(res));
    }

    render() {
        return (
            <div>
                        <form onSubmit={this.onSubmit}>
                        <div className='form-div'>
                           <h1>Sign Up</h1>
                           <p>Please fill in this form to create an account.</p>
                            <input type = 'text'
                             placeholder='name'
                             onChange={this.changeName}
                             value={this.state.name}
                             className='form-control form-group'
                             />
                            <input type = 'text'
                             placeholder='username'
                             onChange={this.changeUserName}
                             value={this.state.userName}
                             className='form-control form-group'
                             />
                             <input type = 'text'
                             placeholder='email'
                             onChange={this.changeEmail}
                             value={this.state.email}
                             className='form-control form-group'
                             />
                             <input type = 'password'
                             placeholder='password'
                             onChange={this.changePassword}
                             value={this.state.password}
                             className='form-control form-group'
                             />
                              <input type = 'text'
                             placeholder='gender'
                             onChange={this.changeGender}
                             value={this.state.gender}
                             className='form-control form-group'
                             />
                            <input type = 'text'
                             placeholder='weight'
                             onChange={this.changeWeight}
                             value={this.state.weight}
                             className='form-control form-group'
                             />
                             <input type = 'text'
                             placeholder='height'
                             onChange={this.changeHeight}
                             value={this.state.height}
                             className='form-control form-group'
                             />

                             <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                             <div class="container signin">
                                <p>Already have an account? <a href="#">Sign in</a>.</p>
                            </div>
                         </div>

                        </form>


                </div>
        )
    }
}

export default SignUp;