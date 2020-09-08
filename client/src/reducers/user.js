import {
  USER_LOADED,
  USER_UPDATED,
  ADD_EXERCISE,
  UPDATE_WEIGHT,
  CREATE_WORKOUT,
  UPDATE_EXERCISE,
  UPDATE_WORKOUT,
  START_DEMO,
  END_DEMO,
} from "../actions/types";

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATED:
    case USER_LOADED:
      return {
        ...state,
        user: payload,
      };

    case ADD_EXERCISE:
    case UPDATE_EXERCISE:
      return {
        ...state,
        user: { ...state.user, exercises: payload },
      };

    case UPDATE_WEIGHT:
      return {
        ...state,
        user: { ...state.user, weightTracked: payload },
      };
    case CREATE_WORKOUT:
    case UPDATE_WORKOUT:
      return {
        ...state,
        user: { ...state.user, workouts: payload },
      };
    case START_DEMO:
      return {
        ...state,
        user: {
          name: "Demo",
          email: null,
          date: new Date(),
          trackedWeight: [],
          exercises: [],
          workouts: [],
          foods: [],
          meals: [],
        },
      };
    case END_DEMO:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
