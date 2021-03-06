import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_QUESTION,
  SET_ANSWER,
  SET_CLUES,
  SET_ERROR,
  SET_CHECKSUM,
  SET_LEVEL,
  SET_LOADING,
  SET_VICTORIOUS,
  SET_START_TIME,
  SET_END_TIME,
} from './appActions';

const setQuestion = (state, action) => updateProperty([ 'question' ], action.payload, state);
const setAnswer = (state, action) => updateProperty([ 'answer' ], action.payload, state);
const setClues = (state, action) => updateProperty([ 'clues' ], action.payload, state);
const setError = (state, action) => updateProperty([ 'error' ], action.payload, state);
const setChecksum = (state, action) => updateProperty([ 'checksum' ], action.payload, state);
const setLevel = (state, action) => updateProperty([ 'level' ], action.payload, state);
const setLoading = (state, action) => updateProperty([ 'loading' ], action.payload, state);
const setVictorious = (state, action) => updateProperty([ 'victory' ], action.payload, state);
const setStartTime = (state, action) => updateProperty([ 'startTime' ], action.payload, state);
const setEndTime = (state, action) => updateProperty([ 'endTime' ], action.payload, state);

export default handleActions({
  [SET_QUESTION]: setQuestion,
  [SET_ANSWER]: setAnswer,
  [SET_CLUES]: setClues,
  [SET_ERROR]: setError,
  [SET_CHECKSUM]: setChecksum,
  [SET_LEVEL]: setLevel,
  [SET_LOADING]: setLoading,
  [SET_VICTORIOUS]: setVictorious,
  [SET_START_TIME]: setStartTime,
  [SET_END_TIME]: setEndTime,
}, state.app);
