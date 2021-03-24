import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        btnPressed: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({
            pseudo
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            btnPressed: true
        })
    }
    render() {
        if (this.state.btnPressed) {
            return (<Redirect push to={`pseudo/${this.state.pseudo}`} />)
        }
        return (
            <Fragment>
                <div className='title'>
                     <center> Welcome to chatbox  </center> 
                </div>

                <div className="connexionBox">
                    <form className='connexion' onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            required
                            placeholder='Pseudo...'
                            value={this.state.pseudo}
                            onChange={this.handleChange}
                        />
                        <button type='submit'> Go ! </button>
                    </form>
                </div>
            </Fragment>

        )
    }
}
export default Connexion