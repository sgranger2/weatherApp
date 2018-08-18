import React from 'react';
import data from '../Apixu_weather_conditions.json';

class ForecastDay extends React.Component {
    render() {
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeek = new Date(this.props.date);
      const day = dayOfWeek.getUTCDay();

      const conditionCode = this.props.condition.code;
      const dataObject = data.filter(condition => condition.code === conditionCode);
      const conditionImage = require(`../weather/${dataObject[0].icon}.png`);
      const conditionText = dataObject[0].day;
        return(
            <div className="day" onClick={this.props.clicked}>
            <div className='day-contents'>
            <h2 className='weekday'>{weekdays[day]}</h2>
            <img className='conditionImage' src={conditionImage} alt="Weather Conditions"/>
            <h4>{conditionText}</h4>
            <div className='row'>
                <h3><span className='maxtemp'>{Math.round(this.props.maxtemp)}</span> / <span className='mintemp'>{Math.round(this.props.mintemp)}</span> {'°'} F </h3> {/* Max Temperature */}
            </div>
            </div>       
            </div>
        );
    }
}

export default ForecastDay;