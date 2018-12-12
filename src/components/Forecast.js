import React from 'react';
import Loading from './Loading';
import Location from './Location';
import Error from './Error';
import ForecastDay from './ForecastDay';
const queryString = require('qs');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;

class Forecast extends React.Component {
    state = {
        loading: true,
        forecast: null,
        city: '',
        target: '',
        error: false
    }

    componentDidMount() {
        let cityState = queryString.parse(this.props.location.search);
        cityState = Object.values(cityState);
        this.makeRequest(cityState);
    }

    componentWillReceiveProps(nextProps) {
        let cityState = queryString.parse(nextProps.location.search);
        cityState = Object.values(cityState);
        this.makeRequest(cityState);
    }

    makeRequest(city) {
        this.setState({ loading: true });
        api.getForecast(city).then((results) => {
            this.setState({ loading: false, forecast: results.forecast.forecastday, city: results.location.name + ', ' + results.location.region });
        }).catch((error) => {
            console.log('Error :' + error.code);
            this.setState({ error: true });
        })
    }

    handleClick(day) {
        console.log(this.state.city);
        this.props.history.push({
            pathname: '/details/' + day.date,
            search: 'location=' + this.state.city, 
            state: {calendarDate: day.date, details: day.day, city: this.state.city},
        })
    }

    render() {
        const forecastdays = this.state.forecast;
        let display;
        if (this.state.error) {
            display = <Error text="Error Loading Results. Please Enter a Proper Location." />;
        }
        else if (this.state.loading) {
            display = <Loading text='Loading' />
        }
        else if (!this.state.loading) {
            display = forecastdays.map((day) => {
                return <ForecastDay
                    key={day.date}
                    date={day.date}
                    condition={day.day.condition}
                    maxtemp={day.day.maxtemp_f}
                    mintemp={day.day.mintemp_f}
                    clicked={() => this.handleClick(day)}>
                </ForecastDay>
            })
        }

        return (
            <section className="content">
                <div className='forecast-content'>
                    <Link className='title2' to='/'>Shane's ReactJS Weather App</Link>
                    {!this.state.loading ? <Location city={this.state.city} /> : null}
                    <div className="daysOfWeek">
                        {display}
                    </div>
                </div>
            </section>
        );
    }
}

export default Forecast;