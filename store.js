import { configureStore } from '@reduxjs/toolkit/dist'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { userAuthApi } from '../services/userAuthApi'
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'
import { createSlice } from '@reduxjs/toolkit/dist'
import Dashboard from '../pages/dashboard'

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store.dispatch)

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;

// import { configureStore } from '@reduxjs/toolkit'
// import { createSlice } from '@reduxjs/toolkit'
// // create a slice 
// export const iconslice= createSlice({
//   name:"icon",
//   initialState:{     
//     icon:'moon'},
//   reducers:{     
//     iconMoon:state=>{        
//       state.icon= 'moon'     },
//     iconSun:state=>{        
//       state.icon= 'sun'    },   }})
// // config the store 
// const store= configureStore({   
//   reducer: {      icon: iconslice.reducer   }})
// // export default the store 
// export default store
// // export the action
// export const iconAction = iconslice.actions