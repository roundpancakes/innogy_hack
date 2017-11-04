import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore'
import DashboardConstants from '../constants/dashboardConstants'
import assign from 'object-assign'

var _items = [
    {
        "Name": "FH 554",
        "Path": "./images/dashboard/FH 554.png",
        "Engagement": "20%"
    },
    {
        "Name": "Frezhster 6X",
        "Path": "./images/dashboard/Frezhster 6X.png",
        "Engagement": "30%"
    },
    {
        "Name": "HVAC",
        "Path": "./images/dashboard/HVAC.png",
        "Engagement": "25%"
    },
    {
        "Name": "LG BTU 5000",
        "Path": "./images/dashboard/LG BTU 5000.png",
        "Engagement": "39%"
    }
]

var DashboardStore = assign({}, BaseStore, {
    getItems() {
        return _items;
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case DashboardConstants.LIST_ITEMS:
            //TODO
            DashboardStore.emitChange()
            break
        case DashboardConstants.SEE_DETAIL:
            //TODO
            DashboardStore.emitChange()
            break
        default:
        // no op
    }
})

export default DashboardStore