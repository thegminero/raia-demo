import { atom } from 'recoil';

export const currentZipcodeState = atom({
    key: 'currentZipcodeState', 
    default: null
  });
  
export const sampleStateVariable = atom({
    key: 'sampleStateVariable', 
    default: null
  });

  export const algoliaUrlState = atom({
    key: 'algoliaUrlState', 
    default: null
  });
  export const algoliaQueryTerm = atom({
    key: 'algoliaQueryTerm', 
    default: null
  });