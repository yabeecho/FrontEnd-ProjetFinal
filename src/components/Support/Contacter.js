import React from 'react'

function Contacter() {
    
    return (
        <React.Fragment>
            <h1>Support</h1>

            <form action='/addmessage' method='post'>
                <label>Votre email :</label>
                <input type='email' name='email' />

                <label>Votre message :</label>
                <textearea name='' id='' cols="" rows=''></textearea>

                <label>Joindre une image jpg, png ou gif</label>
                <input type='file' name='fichier' />

                <input type='submit' value='Valider'/>
            </form>
        </React.Fragment>
    )
}

export default Contacter