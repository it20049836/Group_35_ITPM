import { createContext, useReducer } from 'react'

export const AdminContext = createContext()

export const adminReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ORGANIZATIONS':
            return {
                admin: action.payload
            }
        case 'CREATE_ORGANIZATION':
            return {
                admin: [action.payload, ...state.admin]
            }
        case 'DELETE_ORGANIZATION':
            return {
                admin: state.admin.filter((a) => a._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, {
        admin: null
    })
    
    return (
        <AdminContext.Provider value={{...state, dispatch}}>
            { children }
        </AdminContext.Provider>
    )
}