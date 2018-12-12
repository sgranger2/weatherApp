import React from 'react';
import UpdateLocation from './UpdateLocation';
const Link = require('react-router-dom').Link;


const Home = (props) => {
    return (
        <section className='content'>
            <div className="home-content">
                <Link className='title3' to='/weatherApp'>Shane's ReactJS Weather App</Link>
                <h1 className='cityState'>Enter a City and State</h1>
                <UpdateLocation layout={null} inputStyle='input-body' weatherStyle='btn-body' />
            </div>
        </section>
    );
}

export default Home;