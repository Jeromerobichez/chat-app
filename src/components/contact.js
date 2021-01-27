import React from "react";
import "./components.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    }
  }
  
  render(){
    return (
      <div className="Contact">
      <img
        className="avatar"
        src={this.props.avatar}
        alt={this.props.name}
      />
      <div className="status">
      <h4 className="name">{this.props.name}</h4>
      <div className={this.state.online ? 'isOnline' : 'isOffline'}
      onClick={(e) => {
        const newStatus = !this.state.online
      this.setState({online: newStatus})
      console.log(newStatus)
     }
    }
      >
          <span className={this.state.online ? 'status-online' : 'status-offline'}>
          </span>
          
        <h5 className="status-text">{this.state.online ? 'Online' : 'Offline'}</h5>
        </div>
      </div>
    </div>
    )
  }
}


export default Contact;
