import React, { Component, Fragment } from 'react'
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    messages: {}
  }
  addMessage = message => {
    const messages = { ...this.state.messages }

    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  isUser = pseudo => this.state.pseudo === pseudo
  render() {
    const messagesList = 
    Object.keys(this.state.messages)
    .map(key => 
      <Message 
      key={key} 
      isUser={this.isUser} 
      pseudo={this.state.messages[key].pseudo} 
      message={this.state.messages[key].message} />
      )
    return (
      <Fragment>
        <div className="box">
          <div>
            <div className="messages">
              <div className="message">
                {messagesList}
              </div>
            </div>
          </div>
          <Formulaire
            addMessage={this.addMessage}
            length={140}
            pseudo={this.state.pseudo} />
        </div>
      </Fragment>
    )
  }
}

export default App;