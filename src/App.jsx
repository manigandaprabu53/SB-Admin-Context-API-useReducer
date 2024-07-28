import React, { createContext, useReducer, useState } from 'react'
import SideBar from './components/SideBar'
import DashBoard from './components/DashBoard'
import AddUser from './components/AddUser'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Profile from './components/Profile'
import EditUser from './components/EditUser'
import DashBoardContextComponent from './Context/DashBoardContextComponent'
import UseRef from './components/UseRef'
import UseReducer from './components/UseReducer'
import Actions from './Utils/Actions'
import { findIndexById } from './Common/helper'
export const userContext = React.createContext();

const initialState = [
  {
    id: 1,
    name: "Mani",
    email: "mani@gmail.com",
    dob: "2000-10-12",
    gender: "Male",
    subscription: true
  },
  {
    id: 2,
    name: "Arun",
    email: "arun@gmail.com",
    dob: "2003-11-18",
    gender: "Male",
    subscription: false
  },
  {
    id: 3,
    name: "Karthik",
    email: "karthik@gmail.com",
    dob: "1999-10-08",
    gender: "Male",
    subscription: true
  },
  {
    id: 4,
    name: "Durai",
    email: "durai@gmail.com",
    dob: "2000-12-06",
    gender: "Male",
    subscription: true
  },
  {
    id: 5,
    name: "Vicky",
    email: "vicky@gmail.com",
    dob: "2000-10-22",
    gender: "Male",
    subscription: true
  },
]

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);
  
  return <>
    <div id="wrapper">
      <BrowserRouter>
        <SideBar/>
        <userContext.Provider value={{state, dispatch}}>
          <Routes>
            <Route path='/' element={<DashBoardContextComponent><DashBoard/></DashBoardContextComponent>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/edit-user/:id' element={<EditUser/>}/>
            <Route path='/add-user' element={<AddUser/>}/>
            <Route path='/use-ref' element={<UseRef/>}/>
            <Route path='/use-reducer' element={<UseReducer/>}/>
            <Route path='*' element={<Navigate to = '/'/>}/>
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </div>
    
  </>
}

function reducer(state, action){
  switch(action.type){
    case Actions.ADD_USER:{
      console.log(action.payload);
      action.payload.id = state.length?state[state.length-1].id+1: 1;
      state.push(action.payload)
      return [...state]
    }
    case Actions.EDIT_USER:{
      let index = findIndexById(state, action.payload.id);
      if(index !== -1){
        state.splice(index, 1, action.payload)
        return [...state]
      }
      else{
        return [...state]
      }
    }
    case Actions.DELETE_USER:{
      let index = findIndexById(state, action.payload);
      if(index !== -1){
        state.splice(index, 1)
        return [...state];
      }else{
        return [...state];
      }
    }
  }
}

export default App