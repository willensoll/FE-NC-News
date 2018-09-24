import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div style={{ marginLeft: "33%" }}>
            <h1>ah ah ah, you didnt say the magic word!</h1>
            <img style={{ marginLeft: "10%" }} src="/errorgif.gif" alt="error gif!" />
            <h4>Sorry! An error has occured, please click <Link to={'/'}>here</Link> to go back to the mainpage</h4>
        </div>

    )
}

export { ErrorPage }