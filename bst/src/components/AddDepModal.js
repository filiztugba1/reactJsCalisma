import React, { Component } from 'react';
import {Modal,Button, Form,Row,Col} from 'react-bootstrap'; 
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export class AddDepModal extends Component {

    sayfalar=[
        {  
            sayfaAdi:'',
            navMenu:{
            menuUrl:'',
            menuName:'',
            menuIcon:'',
            isActive:''
            },
            colon:[
                {
                    isModal:false,
                    className:'',
                    style:'',
                    header:{
                      name:'',
                      buttons:[
                        {
                            name:'',
                            className:'',
                            style:'',
                            onClick:'',
                        }
                      ]
                    },
                    body:{
                       isTableForm:'table',
                       table:{
                        className:'',
                        style:'',
                        data:[],
                        buttons:[]
                       },
                       form:{
                        submit:'',
                        formEleman:[
                            {
                                className:'',
                                style:'', 
                                placeholder:'',
                                type:'',
                                data:''
                            }
                        ]
                       } 
                    },
                    footer:{
                        buttons:[
                            {
                                name:'',
                                className:'',
                                style:'',
                                onClick:'',
                            }
                          ]
                    }
                }
            ]
    }
    ]

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
            method:'POST',
            headers:{
                'Accept':'application/json; charset=utf-8',
                'Content-Type':'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                ID:null,
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
          <Modal.Title>Add Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
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
