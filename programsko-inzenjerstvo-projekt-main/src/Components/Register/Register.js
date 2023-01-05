import React,{Component} from "react";


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email:'',
            password:''
        }
    }

    render(){ 
        return(
            <article className="br3 ba b--black-10 mv4 w-80 w-40-m w-20-l mw6  shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" >Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" >Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" >Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type="submit" value="Submit" onClick={()=>this.props.routeChange('home')}/>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;