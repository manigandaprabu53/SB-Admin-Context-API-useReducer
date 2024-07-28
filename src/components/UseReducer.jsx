import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

const initialState = {
    "count": 0,
    "name": 'Manigandaprabu'
}

function reducer(state, action){
    switch(action.type){
        case 'Increament':{
            return{
                ...state,
                count: state.count+1
            }
        }
        case 'Decreament':{
            return{
                ...state,
                count: state.count-1
            }
        }
        case 'Reset':{
            return{
                ...initialState
            }
        }
        case 'Update-Name':{
            return{
                ...state,
                name: action.payload
            }
        }
    }
}

function UseReducer() {
    let [state, dispatch] = useReducer(reducer, initialState);
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Use Ref</h1>
                </div>
                <div>
                    <Button onClick={()=>{dispatch({type: 'Decreament'})}}>-</Button>
                    &nbsp;&nbsp;
                    {state.count}
                    &nbsp;&nbsp;
                    <Button onClick={()=>{dispatch({type: 'Increament'})}}>+</Button>
                </div>
                <div className="row">
                    <input type='text' value={state.name} onChange={(e)=>{dispatch({type: 'Update-Name', payload: e.target.value})}}/>
                    <div>The name is {state.name}</div>
                </div>
                <div>
                    <Button onClick={()=>{dispatch({type: 'Reset'})}} className='mt-3'>Reset</Button>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default UseReducer