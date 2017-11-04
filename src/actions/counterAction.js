import AppDispatcher from "../dispatchers/appDispatcher";
import CounterConstants from "../constants/counterConstants";

export var incrementCounter = function (results) {
  AppDispatcher.dispatch({
      actionType: CounterConstants.INCREMENT_COUNTER,
  })
}