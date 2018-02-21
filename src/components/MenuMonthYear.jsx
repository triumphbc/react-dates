import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class MenuMonthYear extends React.Component {
  constructor(props) {
    super(props);

    this.renderMonths = this.renderMonths.bind(this);
    this.renderYears = this.renderYears.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.goToToday = this.goToToday.bind(this);
  }

  onYearChange(e) {
    const value = e.target.value;
    if (value.length !== 4 || isNaN(value)) {
      e.preventDefault();
      return;
    }
    this.props.onMenuChangeYearMonth({'year': e.target.value});
  }

  onMonthChange(e) {
    this.props.onMenuChangeYearMonth({'month': e.target.value});
  }

  goToToday() {
    this.refs.year.value = null;
    this.props.onMenuChangeYearMonth({
      'month': moment().format('M'),
      'year': moment().format('YYYY')
    });
  }

  renderMonths(value) {

    const options = [];

    for (var month = 1; month <= 12; month++) {
      const monthName = moment(month,"M").format("MMMM");
      options.push(<option key={month} value={month}>{monthName}</option>);
    }
    return <select style={{width: '90px', marginRight: '5px'}} onChange={this.onMonthChange} ref="month" value={value} name="month">{options}</select>;
  }

  renderYears(value) { 
    return <input style={{width: '40px', marginRight: '5px'}} onChange={this.onYearChange} ref="year" name="year" />;
  }

  render() {
    const {
      month,
      year
    } = this.props;

    const months = this.renderMonths(month);
    const years = this.renderYears(year);

    return (
      <span style={ { width: '100%', display: 'flex', justifyContent: 'center', padding: '0 20px 10px' } }>
        {months}
        {years}
      </span>
    );
  }
}

MenuMonthYear.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  onMenuChangeYearMonth: PropTypes.func
};

export default MenuMonthYear;