import React, { useContext } from 'react'
import TopBar from './TopBar'
import Cards from './Cards'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import {findIndexById} from '../Common/helper'
import { useNavigate} from 'react-router-dom';
import {userContext} from '../App'
import { DashBoardContext } from '../Context/DashBoardContextComponent';
import Actions from '../Utils/Actions';

function DashBoard() {
    let {state, dispatch} = useContext(userContext)
    let data = useContext(DashBoardContext);
    let navigate = useNavigate();
    // let data = [
    //     {
    //         title: "Earnings (Monthly)",
    //         value: "$40,000",
    //         icon: "fa-calendar",
    //         color: "primary",
    //         isProgress: false
    //     },
    //     {
    //         title: "Earnings (Annual)",
    //         value: "$215,000",
    //         icon: "fa-dollar-sign",
    //         color: "success",
    //         isProgress: false
    //     },
    //     {
    //         title: "Tasks",
    //         value: "50",
    //         icon: "fa-clipboard-list",
    //         color: "info",
    //         isProgress: true
    //     },
    //     {
    //         title: "Pending Requests",
    //         value: "18",
    //         icon: "fa-comments",
    //         color: "warning",
    //         isProgress: false
    //     }
    // ]
     

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <TopBar/>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>
                <div className="row">
                    {
                        data.map((e, i)=>{
                            return <Cards data={e} key={i}/>
                        })
                    }
                </div>
                <div className="row">
                    <h2 className="h3 mb-3 text-gray-800">User Management</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Subscription</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map((e)=>{
                                    return <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.dob}</td>
                                        <td>{e.subscription?<>Active</>:<>InActive</>}</td>
                                        <td>
                                            <Button variant='primary' onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>
                                            &nbsp;&nbsp;
                                            <Button variant='danger' onClick={()=>dispatch({type: Actions.DELETE_USER, payload: e.id})}>Delete</Button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
    
  </>
}

export default DashBoard