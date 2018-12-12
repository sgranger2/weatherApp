import React from 'react';
const Link = require('react-router-dom').Link;


class UpdateLocation extends React.Component {
    state = {
        locationInput: ''
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
                        pathname: '/weatherApp/forecast',
                        search: '?location=' + this.state.locationInput
                    }}>
                    Get Weather
                </Link>
            </div>
        );
    }
}

export default UpdateLocation;
