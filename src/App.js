import React, { Component, Fragment } from 'react'
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

class App extends Component {
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
          <Formulaire />
        </div>
      </Fragment>
    )
  }
}

export default App;