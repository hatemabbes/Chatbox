import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }
    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({
            message,
            length
        })
    }

    createMessage = () => {
        const { pseudo, addMessage, length } = this.props
        const message = {
            message: this.state.message,
            pseudo: pseudo
        }
        addMessage(message)
        this.setState({
            message: '',
            length
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }
    handleKeyUp = event => {
        if (event.key === 'Enter')
            this.createMessage()
    }
    render() {

        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                    maxLength={this.state.length}
                    required
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder='Exprimez-vous...'
                    onKeyUp={this.handleKeyUp}
                />
                <div className='info'> {this.state.length}</div>
                <button type='submit'> Envoyer</button>
            </form>
        )
    }
}
export default Formulaire