import React from 'react';
// const api = require ('../utils/api');
const Link = require('react-router-dom').Link;


class GetWeather extends React.Component {
    state = {
        locationInput: '',
        currentWeather: null,
    }

    handleUpdateLocation = (e) => {
        this.setState({locationInput: e.target.value});
    }

    render() {
        const styleClasses = `${this.props.weatherStyle} btn-submit`
        return (
            <div className={this.props.layout}>
                <input 
                type="text" 
                className={this.props.inputStyle} 
                placeholder='Austin, Texas'
                value={this.state.locationInput}
                onChange={this.handleUpdateLocation} />
                <Link 
                    className={styleClasses} 
                    to={{
                        pathname: '/forecast',
                        search: '?location=' + this.state.locationInput
                    }}>
                    Get Weather
                </Link>
            </div>
        );
    }
}

export default GetWeather;
