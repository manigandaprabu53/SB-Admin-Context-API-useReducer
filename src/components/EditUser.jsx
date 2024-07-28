import React, { useEffect, useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { findIndexById } from '../Common/helper';
import { userContext } from '../App';
import Actions from '../Utils/Actions';

function EditUser() {
  let {state, dispatch} = useContext(userContext);
  let {id} = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [dob, setDOB] = useState("");
  let [subscription, setSubscription] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = ()=>{
    let data = {id:Number(id),name, email, dob, gender, subscription};
    dispatch({type: Actions.EDIT_USER, payload: data});
    navigate('/')
  }

  const getData = ()=>{
    let index = findIndexById(state, Number(id));
    if(index !== -1){
      setName(state[index].name)
      setEmail(state[index].email)
      setDOB(state[index].dob)
      setGender(state[index].gender)
      setSubscription(state[index].subscription)
    }
    else{
      alert('Invalid User Id')
    }
  }
  useEffect(()=>{
    if(id){
      getData();
    }
  }, [])
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                </div>
                <div className="row">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" value={dob} onChange={(e)=>setDOB(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                    <Form.Select value={gender} onChange={(e)=>setGender(e.target.value)}>
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

export default EditUser