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
        "Intent": Intent.PROMOTION,
        "Text": "I found couple of air conditionings which decrease your energy cost.",
        "Offers": [
            {
                "Name": "LG BTU 5000",
                "Price": "$419",
                "Savings": "10%",
                "Path": "./images/LG BTU 5000.png"
            },
            {
                "Name": "Sancor TX",
                "Price": "$239",
                "Savings": "5%",
                "Path": "./images/Sancor TX.png"
            },
            {
                "Name": "Fridgerator I-20",
                "Price": "$349",
                "Saving": "8%",
                "Path": "./images/Fridgerator I-20.png"
            },
        ]
    },
    {
        "Intent": Intent.PRODUCT_DETAIL,
        "Name": "LG BTU 5000",
        "Text": "This air conditioning could save you $180 per year and pays itself in 3 years."
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
    },
    findNewState(text) {
        var newIndex = _currentStateIndex;
        // TODO: Possibly include LUIS logic here
        newIndex += 1;
        if (newIndex > _states.length) newIndex = _states.length - 1;
    }
});



AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case BotConstants.NEXT_STATE:
            var newIndex = findNewState(action.payload.text)
            BotStore.setStateIndex(newIndexÍ)
            BotStore.emitChange()
            break
        case BotConstants.PREV_STATE:
            var newIndex = _currentStateIndex - 1;
            if (newIndex < 0) newIndex = 0;
            BotStore.setStateIndex(newIndex)
            BotStore.emitChange()
            break
        case BotConstants.RESET_BOT:
            BotStore.setStateIndex(0)
            BotStore.emitChange()
            break
        default:
        // no op
    }
})

export default BotStore