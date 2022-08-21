import {
  HeaderAction,
  SET_SUBTITLE,
  UNSET_SUBTITLE,
  ATTACH_CONTENT,
  DETACH_CONTENT,
  HeaderState,
} from '../actions/header';

const initialState: HeaderState = {
  subtitle: '',
  content: null,
} as const;

export function headerReducer(state = initialState, action: HeaderAction): HeaderState {
  switch (action.type) {
    case SET_SUBTITLE:
      return {
        ...state,
        subtitle: action.subtitle,
      };

    case UNSET_SUBTITLE:
      return {
        ...state,
        subtitle: '',
      };

    case ATTACH_CONTENT:
      return {
        ...state,
        content: action.content,
      };

    case DETACH_CONTENT:
      return {
        ...state,
        content: null,
      };

    default:
      return state;
  }
}
