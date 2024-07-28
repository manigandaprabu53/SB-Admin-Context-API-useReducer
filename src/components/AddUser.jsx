import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import Actions from '../Utils/Actions';

function AddUser() {
  let {state, dispatch} = useContext(userContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [dob, setDOB] = useState("");
  let [subscription, setSubscription] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = ()=>{
    let data = {name, email, dob, gender, subscription};
    dispatch({type: Actions.ADD_USER, payload: data})
    navigate('/');
  }
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Add User</h1>
                </div>
                <div className="row">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" onChange={(e)=>setDOB(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                    <Form.Select defaultValue="null" onChange={(e)=>setGender(e.target.value)}>
                      <option disabled value="null">select one</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Subscription" checked={subscription} onChange={(e)=>setSubscription(e.target.checked)}/>
                  </Form.Group>
                  <Button variant="primary" onClick={()=>handleSubmit()}>
                    Submit
                  </Button>
                </Form>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default AddUser