import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn:false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn}/>
          {isLoggedIn ? (
            <Logout logout ={this.onClickButton}/>
          ) : (
            <Login login = {this.onClickButton}/>
          )}
        </div>
      </div>
    )
  }
}
