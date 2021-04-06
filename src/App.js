import React, { Component, Fragment, createRef } from 'react'
import './App.css';
import './Animation.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import base from './base'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    messages: {}
  }
  messagesRef = createRef()
  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }
  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }
  addMessage = message => {
    const messages = { ...this.state.messages }

    messages[`message-${Date.now()}`] = message
    Object.keys(messages)
      .slice(0, -10)
      .map(key => messages[key] = null)
    this.setState({ messages })
  }
  isUser = pseudo => this.state.pseudo === pseudo
  render() {
    const messagesList =
      Object.keys(this.state.messages)
        .map(key =>
          <CSSTransition
            timeout={200}
            classNames='fade'
            key={key}>
            <Message
              isUser={this.isUser}
              pseudo={this.state.messages[key].pseudo}
              message={this.state.messages[key].message} />
          </CSSTransition>
        )
    return (
      <Fragment>
        <div className="box">
          <div>
            <div className="messages" ref={this.messagesRef}>
              <TransitionGroup className="message">
                {messagesList}
              </TransitionGroup>
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