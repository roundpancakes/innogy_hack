import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore'
import DashboardConstants from '../constants/dashboardConstants'
import assign from 'object-assign'

var _counter = 0

var DashboardStore = assign({}, BaseStore, {
    getCounter() {
        return _counter
    },
    setCounter(count) {
        _counter = count
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