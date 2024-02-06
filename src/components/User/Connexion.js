import React, { useEffect } from 'react'
import './connexion.css'
import NavbarBis from '../Navbar/NavbarBis'

function Connexion() {
    useEffect(() => {
        // Ajouter la classe au body lorsque le composant est monté
        document.body.classList.add('bodyBack');
        // Retirer la classe du body lorsque le composant est démonté
        return () => {
            document.body.classList.remove('bodyBack');
        };
    }, []);

    return (
        <React.Fragment>
            <section className='container'>
                <NavbarBis />
                <h3 className='pageTitle'>Se connecter :</h3>
                <form action='https://bewildered-scarf.cyclic.app/api/connexion' method='post' className='boxForm'>
                    <input type="email" name="email" placeholder='Email' className='conInput' />
                    <input type="password" name="password" placeholder='Password' className='conInput' />


                    <input type="submit" value="Envoyer" className='bouton'/>
                </form>
                <div className='boxLink'>
                    <a href='/inscription' className='liens'>Sign In ?</a>
                    <a href='https://fullstack-js.vercel.app/' className='liens'>Forgotten Password ?</a>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Connexion