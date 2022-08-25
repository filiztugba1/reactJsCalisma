import React, { Component } from 'react';
import {Modal,Button, Form,Row,Col, FormControl} from 'react-bootstrap'; 
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export class EditEmpModal extends Component {

    constructor(props){
        super(props);
        this.state={
            snackbaropen:false,
            snackbarmsg:'',
            deps:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
        
    handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:63874/api/Employees',{
            method:'PUT',
            headers:{
                'Accept':'application/json; charset=utf-8',
                'Content-Type':'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                EmployeeID:e.target.EmployeeID.value,
                EmployeeName:e.target.EmployeeName.value,
                Department:e.target.Department.value,
                MailID:e.target.MailID.value,
                DOJ:e.target.DOJ.value.toString()
            }),
            
        })
        .then((response) => response.json())
        .then((data) =>
        {
            this.setState({
                snackbaropen:true,
                snackbarmsg:'başarılı bir şekilde kaydedilmiştir'
            })
        }
        ,(error)=>{
            this.setState({
                snackbaropen:true,
                snackbarmsg:'kaydetme başarısız'
            })
        }
        
        )
        
    }

    snackbarClose=()=>{
        this.setState({
           snackbarClose:false 
        })
    }

    componentDidMount(){
      
        fetch('http://localhost:63874/api/Departments')
        .then((response)=>response.json())
        .then((data)=>
            this.setState({
                deps:data
            })
        )
    }
  render() {
  
    return (

        <div 
            className='container'>
                <Snackbar
                anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                open={this.state.snackbaropen}
                autoHideDuration={3000}
                onClose={this.snackbarClose}
                message={<span id="message-id">{this.state.snackbarmsg}</span>}
                acition={[
                    <IconButton key="close" area-label="Close" color="inherit" onClick={this.snackbarClose}>
                        x
                    </IconButton>
                ]}
                />

      <Modal
      {...this.props}
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                                <Form.Label>
                                EmployeeID
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="EmployeeID"
                                disabled
                                defaultValue={this.props.empid}
                                placeholder='EmployeeID'
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                Employee Name
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="EmployeeName"
                                required
                                placeholder='EmployeeName'
                                defaultValue={this.props.empname}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                Department
                                </Form.Label>
                            
                                <FormControl as="select"  name="Department" defaultValue={this.props.empdep}>
                                    {
                                        this.state.deps.map(dep=>
                                            <option key={dep.ID} value={dep.DepartmentName}>{dep.DepartmentName}</option>
                                            )
                                    }
                                    
                                </FormControl>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                Mail ID
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="MailID"
                                required
                                placeholder='MailID'
                                defaultValue={this.props.empmail}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                DOJ
                                </Form.Label>
                                <Form.Control 
                                type="date"
                                name="DOJ"
                                required
                                placeholder='DOJ'
                                defaultValue={this.props.empdoj}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update Department
                            </Button>
                        </Form>
                    </Col>
                </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
  }
}
