export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState =  [...state].sort(function (a: any,b: any){
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {

            return state.filter((item: any) => item.age>=18)
        }
        default: return state
    }
}