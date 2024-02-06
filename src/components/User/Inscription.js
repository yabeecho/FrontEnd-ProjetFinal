import React, { useEffect } from 'react'
import NavbarBis from '../Navbar/NavbarBis'
import "./inscription.css"

function Inscription() {
    useEffect(() => {
        // Ajouter la classe au body lorsque le composant est monté
        document.body.classList.add('bodyBack2');
        // Retirer la classe du body lorsque le composant est démonté
        return () => {
            document.body.classList.remove('bodyBack2');
        };
    }, []);

    return (
        <React.Fragment>
            <section className='container2'>
                <NavbarBis />
                <h3 className='pageTitle2'>Sign In :</h3>

                <form action='https://bewildered-scarf.cyclic.app/api/inscription' method='post' className='boxForm2'>
                    <input type="email" name='email' placeholder='Email' className='conInput2' />
                    <input type="password" name='password' placeholder='Password' className='conInput2' />
                    <input type="text" name='nom' placeholder='Last Name' className='conInput2' />
                    <input type="text" name='prenom' placeholder='First Name' className='conInput2' />
                    <input type="text" name='tel' placeholder='Phone number' className='conInput3' />

                    <div className='boxCheck'>
                        <input type="checkbox" name='conditions' id='idConditions' />
                        <label for="idConditions" className='conditions'>I agree to the terms subscriber agreement and the application Privacy Policy</label>
                    </div>

                    <input type="submit" value="Sign In" className='bouton2' />
                </form>
            </section>
        </React.Fragment >

    )
}

export default Inscription