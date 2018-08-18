import React from 'react';
import PropTypes from 'prop-types';
const Link = require('react-router-dom').Link;


class Error extends React.Component {
    state = {
        text: this.props.text
    }
    render() {

        if (this.state.text === undefined) {
            this.setState({ text: "Error" });
        }

        return (
            <div>
                <p className="loadingStyle">
                    {this.props.text}
                </p>
                <Link
                    className='btn-body btn-submit'
                    to={{
                        pathname: '/',
                    }}>
                    Back
                </Link>
            </div>

        );
    }
}

Error.propTypes = {
    text: PropTypes.string.isRequired
}

export default Error;