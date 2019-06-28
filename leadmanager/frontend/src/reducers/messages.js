import { GET_MESSAGES, CREATE_MESSAGES } from "../actions/types";
import { isNull } from "util";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGES:
      return (state = action.payload);
    default:
      return state;
  }
}
