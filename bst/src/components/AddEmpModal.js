import React, { Component } from 'react';
import {Modal,Button, Form,Row,Col} from 'react-bootstrap'; 
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export class AddEmpModal extends Component {

    constructor(props){
        super(props);
        this.state={
            snackbaropen:false,
            snackbarmsg:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
        
    handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:63874/api/Employees',{
            method:'POST',
            headers:{
                'Accept':'application/json; charset=utf-8',
                'Content-Type':'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                EmployeeID:null,
                EmployeeName:e.target.EmployeeName.value,
                Department:e.target.Department.value,
                MailID:e.target.MailID.value,
                DOJ:e.target.DOJ.value
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
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>
                                Employee Name
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="EmployeeName"
                                required
                                placeholder='EmployeeName'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                Department
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="Department"
                                required
                                placeholder='Department'
                                />
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
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                DOJ
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="DOJ"
                                required
                                placeholder='DOJ'
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
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
