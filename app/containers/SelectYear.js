import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fieldChangedAction } from '../reducers/PersonalDataReducer'
import getYearRange from '../utils/getYearRange'
import SelectForm from '../components/SelectForm'

class SelectYear extends React.Component {
  state = {
    years: getYearRange(new Date().getFullYear(), 100)
  };

  onFieldChange(field, value) {
    this.props.dispatch(fieldChangedAction(field, value));
  }

  render() {
    return (
      <SelectForm options={this.state.years}
                  value={this.props.year}
                  fieldName={'year'}
                  onPressNext={() => {this.props.history.push("/gender")}}
                  onFieldChange={this.onFieldChange.bind(this)}/>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.personalData
});

export default connect(mapStateToProps)(SelectYear);