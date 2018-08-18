import React from 'react';
import data from '../Apixu_weather_conditions.json';
import Location from './Location';

class Details extends React.Component {
    render() {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = new Date(this.props.location.state.calendarDate);
        const day = dayOfWeek.getUTCDay();

        const details = this.props.location.state.details;
        const conditionCode = details.condition.code;
        const dataObject = data.filter(condition => condition.code === conditionCode);
        const conditionImage = require(`../weather/${dataObject[0].icon}.png`);
        const conditionText = dataObject[0].day;
        console.log(this.props);
        return (
            <section className="details-section">
                <div className='details-content'>
                    <Location city={this.props.location.state.city} />
                    <div className="details-day">
                        <div className='details-day-contents'>
                            <h2 className='weekday'>{weekdays[day]}</h2>
                            <img className='conditionImage' src={conditionImage} alt="Weather Conditions" />
                            <h4>{conditionText}</h4>
                            <div className='row'>
                                <h3><span className='maxtemp'>{Math.round(details.maxtemp_f)}</span> / <span className='mintemp'>{Math.round(details.mintemp_f)}</span> {'°'} F </h3>
                            </div>
                        </div>
                        <div className='more-details'>
                        <ul>
                            <li> <span className='details-fontColor'>Humidity:</span> {details.avghumidity}%</li>
                            <li><span className='details-fontColor'>Average Temperature:</span> {details.avgtemp_f} {'°'}F</li>
                            <li><span className='details-fontColor'>Total Precipitation:</span> {details.totalprecip_in} inches</li>
                            <li><span className='details-fontColor'>Max Wind Speed:</span> {details.maxwind_mph} mph</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <button className='btn-details btn-submit' onClick={this.props.history.goBack}>
                    Back
                </button>
            </section>
        );
    }
}

export default Details;