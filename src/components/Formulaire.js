import React, { Component } from 'react'

class Formulaire extends Component {
    render() {
        return (
            <form className='form'>
                <textarea 
                maxLength={140}
                required
                placeholder='Exprimez-vous...'
                />
                <div className='info'> 120</div>
                <button type='submit'> Envoyer</button>
            </form>
        )
    }
}
export default Formulaire