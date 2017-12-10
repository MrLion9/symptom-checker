import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fieldChangedAction } from '../reducers/PersonalDataReducer'
import SelectForm from '../components/SelectForm'

class SelectYear extends React.Component {
  state = {
    genders: ['Male', 'Female']
  };

  onFieldChange(field, value) {
    this.props.dispatch(fieldChangedAction(field, value));
  }

  render() {
    return (
      <SelectForm options={this.state.genders}
                  value={this.props.gender}
                  fieldName={'gender'}
                  onPressNext={() => {this.props.history.push("/search")}}
                  onFieldChange={this.onFieldChange.bind(this)}/>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.personalData
});

export default connect(mapStateToProps)(SelectYear);