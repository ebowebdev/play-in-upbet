export const initialState = {}

export const reducer = (state, { type, payload }) => {
  switch(type){
    case "FETCH_TABLES_DATA":
      return {
        ...state,
        tables: payload
      }
    default:
      return state
  }
}