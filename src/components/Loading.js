import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
    state = {
        text: this.props.text
    }
    render() {

        if (this.state.text === undefined) {
            this.setState({text: "Loading"});
        }

        return(
            <p className="loadingStyle">
                {this.props.text}
            </p>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired
}

export default Loading;