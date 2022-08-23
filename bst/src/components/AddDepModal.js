import React, { Component } from 'react';
import {Modal,Button, Form,Row,Col} from 'react-bootstrap'; 


export class AddDepModal extends Component {

    handleSubmit(e){
        e.preventDefault();
        alert(e.target.DepartmentName.value);
        fetch('http://localhost:63874/api/Departments',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'aplication/json'
            },
            body:JSON.stringify({
                ID:null,
                DepartmentName:e.target.DepartmentName.value
            })
        })
        .then((response) => response.json())
        .then((data) =>
            this.setState({
                deps:data
            })
        );
    }
  render() {
    return (
       
      <Modal
      {...this.props}
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div 
            className='container'>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>
                                    Departmant Name
                                </Form.Label>
                                <Form.Control 
                                type="text"
                                name="DepartmentName"
                                required
                                placeholder='DepartmentName'
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
