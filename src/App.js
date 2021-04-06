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
  render() {
    return (
      <Fragment>
        <div className="box">
          <div>
            <div className="messages">
              <div className="message">
                <Message />
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