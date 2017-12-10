import { FIELD_CHANGED } from '../actions'

const initialState = {
  year: 1993,
  gender: 'Male'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIELD_CHANGED:
      return {
        ...state,
        [action.fieldName]: action.value
      };
    default:
      return state;
  }
}

export function fieldChangedAction(fieldName, value) {
  return {
    type: FIELD_CHANGED,
    fieldName,
    value
  };
}