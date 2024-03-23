import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: this.getTime(this.props.clock.zone)};
    this.interval = null;
  }

  getTime(zone) {
    const currentZone = (new Date()).getTimezoneOffset() * 60000;
    const newZone = zone * 60 * 60 * 1000 + currentZone;
    return new Date((new Date()).getTime() + newZone).toLocaleTimeString();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({time: this.getTime(this.props.clock.zone)}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='clock-container'>
        <div className='clock-title'>
          <h5 className='title'>{this.props.clock.name}</h5>
          <button className='clock-remove' type="button" onClick={() => this.props.delClock(this.props.clock.id)}>X</button>
        </div>
        <div className='clock-content'>{this.state.time}</div>
      </div>
    )
  }
}