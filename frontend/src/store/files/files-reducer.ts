import { File } from "../../types/File";
import { Action, ActionType } from "./files-actions";

export enum FetchingState {
  NONE,
  LOADING,
  SUCCESS,
  ERROR
}

export type State = {
  loading: FetchingState.NONE
} | {
  loading: FetchingState.LOADING
} | {
  loading: FetchingState.SUCCESS,
  list: File[]
} | {
  loading: FetchingState.ERROR,
  errorMsg: string
};

const initialState: State = {
  loading: FetchingState.NONE
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_START:
      return state.loading === FetchingState.SUCCESS
        ? state
        : {
          loading: FetchingState.LOADING
        };
    case ActionType.FETCH_SUCCESS:
      const { list } = action.payload;
      return {
        loading: FetchingState.SUCCESS,
        list
      };
    case ActionType.FETCH_ERROR:
      const { errorMsg } = action.payload;
      return {
        loading: FetchingState.ERROR,
        errorMsg
      };
    case ActionType.DISCARD_ERROR:
      return {
        loading: FetchingState.NONE
      };
    default:
      return state;
  }
};
