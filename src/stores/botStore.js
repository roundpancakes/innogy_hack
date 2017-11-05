import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore'
import BotConstants from '../constants/botConstants'
import assign from 'object-assign'

var _currentStateIndex = 0
var _isInRepeatState = false;

const _states = [
    {
        text: ""
    },
    {
        text: "Hi, I am Emma! I've got some saving tips for you! Are you interested?"
    },
    {
        text: "Your AC is performing 13% worse than the average in your area. I've got some alternatives.",
        offers: [
            {
                name: "LG BTU 5000",
                price: "$419",
                savings: "8%",
                path: "./images/LG BTU 5000.png"
            },
            {
                name: "Sancor TX",
                price: "$239",
                savings: "3%",
                path: "./images/Sancor TX.png"
            },
            {
                name: "Fridgerator I-20",
                price: "$349",
                savings: "5%",
                path: "./images/Fridgerator I-20.png"
            },
        ]
    },
    {
        name: "LG BTU 5000",
        text: "This saves you $140 per year and pays itself back in 3 years. What do you think?"
    },
    {
        text: "Great. One of our employees will contact you so you can agree on the date."
    }
]

var BotStore = assign({}, BaseStore, {
    getState() {
        if (_isInRepeatState) {
            _isInRepeatState = false;
            return {
                "text": "Sorry! What do you mean?"
            }
        }
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

        if (!text) {
            newIndex++;
            return newIndex;
        }

        text = text.toLowerCase().replace(/\./g, ' ').split(' ');
        console.log(text);

        switch (_currentStateIndex) {
            case 0:
                newIndex++;
                break
            case 1:
                if (text.some(x => ["yes", "course", "sure", "yeah", "absolutely"].indexOf(x) >= 0)) {
                    newIndex++;
                }
                else {
                    _isInRepeatState = true;
                }
                break
            case 2:
                newIndex++;
                break
            case 3:
                if (text.some(x => ["yes", "course", "sure", "yeah", "absolutely"].indexOf(x) >= 0)) {
                    newIndex++;
                }
                else {
                    _isInRepeatState = true;
                }
                break
            case 4:
                break
        }

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
            setTimeout(() => BotStore.emitChange(), Math.floor(Math.random() * 600) + 750)
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