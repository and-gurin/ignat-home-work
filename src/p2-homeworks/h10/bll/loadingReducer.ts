const initialState = {
    loading: false
}
export type InitialStateType = typeof initialState;

export const loadingReducer = (state = initialState, action: LoadingActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SWITCH-LOADING': {
            return {
                ...state, loading: action.value
            }
        }
        default: return state
    }
}

export const loadingAC = (value: boolean) => ({type: 'SWITCH-LOADING', value: value} as const) // fix any
export type LoadingActionType = ReturnType<typeof loadingAC>