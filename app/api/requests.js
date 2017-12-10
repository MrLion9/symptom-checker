const ApiMedicHost = 'https://sandbox-healthservice.priaid.ch';
const lang = 'en-gb';
const format = 'json';

export const getSymptoms = (token) => {
  return fetch(`${ApiMedicHost}/symptoms?language=${lang}&format=${format}&token=${token}`, {
    method: 'GET'
  }).then(res => res.json());
};

export const getDiagnosis = (token, {symptoms, year}) => {
  return fetch(`${ApiMedicHost}/diagnosis?symptoms=[${symptoms.map(s => s.ID).join(',')}]&language=${lang}&format=${format}&token=${token}&gender=male&year_of_birth=${year}`, {
    method: 'GET'
  }).then(res => res.json());
};