import React from 'react'
import Navbar from '../Navbar/Navbar'
import './support.css'

function Support() {
    return (
        <React.Fragment>
            <Navbar />
            <h2 className='titre'>Frequently asked questions</h2>

            <section className='boxQuestion'>
                <div className='questions'>
                    <a href='' className='linkSupport'>Purchases and rentals</a>
                    <p className='descriptionSupport'>Assistance to buy or rent vehicules and informations about products.</p>
                </div>
                <div className='questions'>
                    <a href='' className='linkSupport'>Paiement</a>
                    <p className='descriptionSupport'>If you have any questions or problems about paiement.</p>
                </div>
                <div className='questions'>
                    <a href='' className='linkSupport'>Account and security</a>
                    <p className='descriptionSupport'>Assistance for the account and security management.</p>
                </div>
                <div className='questions'>
                    <a href='' className='linkSupport'>Other questions</a>
                    <p className='descriptionSupport'>You still have questions ? You're free to ask here.</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Support