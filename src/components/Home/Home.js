import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css"

function Home() {
    useEffect(() => {
        // Ajouter la classe au body lorsque le composant est monté
        document.body.classList.add('bodyBack3');
        // Retirer la classe du body lorsque le composant est démonté
        return () => {
            document.body.classList.remove('bodyBack3');
        };
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <h1> Welcome Home </h1>
        </React.Fragment>
    );
}

export default Home;