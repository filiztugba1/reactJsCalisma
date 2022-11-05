import React, { Component } from 'react';
import {Modal,Button, Form,Row,Col} from 'react-bootstrap'; 
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export class EditDepModal extends Component {

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
        fetch('http://localhost:63874/api/Departments',{
            method:'PUT',
            headers:{
                'Accept':'application/json; charset=utf-8',
                'Content-Type':'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                ID:e.target.ID.value,
                DepartmentName:e.target.DepartmentName.value
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
          <Modal.Title>Edit Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                                <Form.Label>
                                    ID
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="ID"
                                disabled
                                defaultValue={this.props.depid}
                                placeholder='ID'
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Departmant Name
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="DepartmentName"
                                required
                                placeholder='DepartmentName'
                                defaultValue={this.props.depname}
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
