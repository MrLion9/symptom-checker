import { SYMPTOM_FIELD_CHANGED } from '../actions'

const initialState = {
  symptoms: [],
  filteredSymptoms: [],
  selectedSymptoms: [],
  search: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SYMPTOM_FIELD_CHANGED:
      return {
        ...state,
        [action.fieldName]: action.value
      };
    default:
      return state;
  }
}

export function symptomsFieldChangedAction(fieldName, value) {
  return {
    type: SYMPTOM_FIELD_CHANGED,
    fieldName,
    value
  };
}