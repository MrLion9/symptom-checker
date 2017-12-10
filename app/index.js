import React from 'react';
import { connect } from 'react-redux'
import {
  Alert
} from 'react-native';
import { getToken } from './api/auth'
import { getSymptoms, getDiagnosis } from './api/requests'
import filter from './utils/filter'
import deleteFromArray from './utils/deleteFromArray'
import SearchForm from './components/SearchForm'
import { symptomsFieldChangedAction } from './reducers/SymptomsReducer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      symptoms: [],
      filteredSymptoms: [],
      selectedSymptoms: []
    };
  }

  async componentWillMount() {
    const res = await getToken();

    this.setState({
      token: res.Token
    });

    this.onSearchSymptoms('');
  }

  getSymptoms() {
    if (!this.state.symptoms.length) {
      return getSymptoms(this.state.token).then(symptoms => {
        this.setState({symptoms});
        return symptoms;
      });
    }

    return Promise.resolve(this.state.symptoms);
  }

  async getDiagnosis() {
    const diagnosis = await getDiagnosis(this.state.token, {
      symptoms: this.state.selectedSymptoms,
      year: this.props.year
    });

    // console.log(diagnosis);
    Alert.alert('Possible diagnosis', diagnosis.reduce((sum, cur) => {
      return sum + ' ' + cur.Issue.Name + '\n';
    }, ''));
  }

  onSearchSymptoms(search) {
    this.props.dispatch(symptomsFieldChangedAction('search', search));

    setTimeout(() => {
      this.getSymptoms().then(symptoms => {
        const filteredSymptoms = filter(symptoms, s => {
          return s.Name.toLowerCase().indexOf(this.props.search) !== -1;
        });

        this.setState({filteredSymptoms});
      });
    }, 0);
  }

  selectSymptom(symptom) {
    let selected = this.state.selectedSymptoms;

    this.setState({
      selectedSymptoms: selected.length < 6 && selected.indexOf(symptom) === -1 ? selected.concat(symptom): selected
    });
  }

  deleteSymptom(symptom) {
    let selected = this.state.selectedSymptoms;

    this.setState({
      selectedSymptoms: deleteFromArray(selected, symptom, true)
    });
  }

  updateSelectedTags(newTags) {
      this.setState({
          selectedSymptoms: newTags
      });
  }

  render() {
    return (
      <SearchForm search={this.props.search}
                  onSearch={this.onSearchSymptoms.bind(this)}
                  select={this.selectSymptom.bind(this)}
                  delete={this.deleteSymptom.bind(this)}
                  updateSelectedTags={this.updateSelectedTags.bind(this)}
                  filtered={this.state.filteredSymptoms}
                  selected={this.state.selectedSymptoms}
                  searchAction={this.getDiagnosis.bind(this)}
                  searchTitle="Get diagnosis" />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.symptomsData,
  ...state.personalData
});

export default connect(mapStateToProps)(App);