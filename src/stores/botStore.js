import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore'
import BotConstants from '../constants/botConstants'
import Intent from '../constants/botIntents'
import assign from 'object-assign'

var _currentStateIndex = 0
const _states = [
    {
        text: ""
    },
    {
        intent: Intent.PROMOTION,
        text: "a",
        offers: [
            {
                name: "LG BTU 5000",
                price: "$419",
                savings: "10%",
                path: "../images/LG BTU 5000.png"
            },
            {
                name: "Sancor TX",
                price: "$239",
                savings: "5%",
                path: "../images/Sancor TX.png"
            },
            {
                name: "Fridgerator I-20",
                price: "$349",
                savings: "8%",
                path: "../images/Fridgerator I-20.png"
            },
        ]
    },
    {
        intent: Intent.GREETING,
        text: "Hi, I am Emma and I found how you can save more money. Would you like to know more?"
    },
    {
        intent: Intent.PROMOTION,
        text: "I found couple of air conditionings which decrease your energy cost.",
        offers: [
            {
                name: "LG BTU 5000",
                price: "$419",
                savings: "10%",
                path: "./images/LG BTU 5000.png"
            },
            {
                name: "Sancor TX",
                price: "$239",
                savings: "5%",
                path: "./images/Sancor TX.png"
            },
            {
                name: "Fridgerator I-20",
                price: "$349",
                saving: "8%",
                path: "./images/Fridgerator I-20.png"
            },
        ]
    },
    {
        intent: Intent.PRODUCT_DETAIL,
        name: "LG BTU 5000",
        text: "This air conditioning could save you $180 per year and pays itself in 3 years."
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
        // TODO: Possibly include LUIS logic here
        var newIndex = _currentStateIndex + 1;
        if (newIndex >= _states.length) {
            newIndex = _states.length - 1;
        }
        return newIndex
    }
});



AppDispatcher.register(function (action) {
    let newIndex
    switch (action.actionType) {
        case BotConstants.NEXT_STATE:
            newIndex = BotStore.findNewState(action.payload)
            BotStore.setStateIndex(newIndex)
            setTimeout(() => BotStore.emitChange(), Math.floor(Math.random() * 400) + 300)
            break
        case BotConstants.PREV_STATE:
            newIndex = _currentStateIndex - 1;
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