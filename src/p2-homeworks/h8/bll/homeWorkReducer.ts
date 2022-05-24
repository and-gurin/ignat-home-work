import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState =  [...state].sort(function (a: UserType,b: UserType){
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {

            return state.filter((item: any) => item.age>= action.payload)
        }
        default: return state
    }
}