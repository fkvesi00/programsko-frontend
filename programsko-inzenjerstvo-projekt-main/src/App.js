import React,{Component} from 'react';
import './App.css';
import Game from './Components/Game1/Game';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import SignIn from './Components/SignIn/SignIn';
import Title from './Components/TItle/Title';
import Register from './Components/Register/Register';

class App extends Component{
  constructor(){
    super()
    this.state = {
      route:'signIn'
    }
  }
  
  onRouteChange= (route) => {
    this.setState({route})
  }

  render(){
    return (
      
      <>
      <NavBar routeChange={this.onRouteChange} flagMethod={this.onSingedChange} flag={this.state.isSingedIn} route={this.state.route}/>
      <Title/>
      {(this.state.route==='home')?
      <HomePage routeChange={this.onRouteChange}/>
      :
      (this.state.route==='Tic Tac Toe')?
      <Game routeChange={this.onRouteChange}/>
      :
      this.state.route==='signIn'?
      <SignIn routeChange={this.onRouteChange} />
      :
      (this.state.route==='register')?
      <Register routeChange={this.onRouteChange}/>
      :
      <h2 style={{textAlign:'center'}}>not done Yet</h2>
      }
      </>
    );
  }
}

export default App;
