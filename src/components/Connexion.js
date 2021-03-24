import React, { Component } from 'react'

class Connexion extends Component {
    render() {
        return (
            <div className="connexionBox">
                <form className='connexion'>
                    <input 
                    type='text'
                    required
                    placeholder='Pseudo...'
                    />
                    <button type='submit'> Go ! </button>
                </form>
            </div>
        )
    }
}
export default Connexion