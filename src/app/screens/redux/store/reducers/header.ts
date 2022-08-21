import { HeaderAction, ATTACH_HEADER_CONTENT, DETACH_HEADER_CONTENT, HeaderState } from '../actions/header';

const initialState: HeaderState = {
  content: null,
};

export function headerReducer(state = initialState, action: HeaderAction): HeaderState {
  switch (action.type) {
    case ATTACH_HEADER_CONTENT:
      return {
        ...state,
        content: action.content,
      };

    case DETACH_HEADER_CONTENT:
      return {
        ...state,
        content: null,
      };

    default:
      return state;
  }
}
