import React from 'react';


class Location extends React.Component {
    render() {
      const city = this.props.city;
        return(
            <div className='locationStyle'>
            <h2>{city}</h2>
            </div>
        );
    }
}

export default Location;