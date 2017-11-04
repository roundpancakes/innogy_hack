import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore'
import BotConstants from '../constants/botConstants'
import Intent from '../constants/botIntents'
import assign from 'object-assign'

var _currentStateIndex = 0
var _states = [
    {
        "Intent": Intent.GREETING,
        "Text": "Hi, I am Ema and I found how you can save more money. Would you like to know more?"
    },
    {
        "Intent": Intent.OVERVIEW,
        "Text": "Here is how your home is doing:"
    },
    {
        "Intent": Intent.PROMOTION,
        "Text": "I found couple of air conditionings which can decrease your energy cost."
    }
]

var BotStore = assign({}, BaseStore, {
    getState() {
        return _states[_currentStateIndex];
    },
    setStateIndex(index) {
        _currentStateIndex = index
    },
    getStateIndex() {
        return _currentStateIndex
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case BotConstants.NEXT_STATE:
            var newIndex = _currentStateIndex + 1;
            if (newIndex >= _states.length) newIndex = _states.length - 1;
            CounterStore.setStateIndex(newIndexÍ)
            CounterStore.emitChange()
            break
        case BotConstants.PREV_STATE:
            var newIndex = _currentStateIndex - 1;
            if (newIndex < 0) newIndex = 0;
            CounterStore.setStateIndex(newIndex)
            CounterStore.emitChange()
            break
        case BotConstants.RESET_BOT:
            CounterStore.setStateIndex(0)
            CounterStore.emitChange()
            break
        default:
        // no op
    }
})

export default BotStore