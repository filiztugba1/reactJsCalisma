import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import { AddDepModal } from './AddDepModal';
import {Button,ButtonToolbar} from 'react-bootstrap'; 
import { EditDepModal } from './EditDepModal';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
export class Departments extends Component {
    
  constructor(props)
  {
    super(props);
    this.state={
        deps:[],
        addModalShow:false,
        editModalShow:false,
        snackbaropen:false,
        snackbarmsg:''
    }
  }

  componentDidMount(){
    this.refleshlist();
  }
  refleshlist()
  {
    fetch('http://localhost:63874/api/Departments')
    .then((response) => response.json())
    .then((data) =>
        this.setState({
            deps:data
        })
    );
  }

 /* componentDidUpdate()
  {
    this.refleshlist();
  }
  */

  deletedep(depid)
  {
   if(window.confirm('Are you sure?'))
   {
        fetch('http://localhost:63874/api/Departments/'+depid,{
          method:'DELETE',
          headers:{
              'Accept':'application/json; charset=utf-8',
              'Content-Type':'application/json; charset=utf-8',
          }
          
      })
      .then((response) => response.json())
      .then((data) =>
      {
          this.setState({
              snackbaropen:true,
              snackbarmsg:'başarılı bir şekilde silinmiştir'
          })
          this.refleshlist();
      }
      ,(error)=>{
          this.setState({
              snackbaropen:true,
              snackbarmsg:'silme işlwmi başarısız'
          })
      }
      
      )
   }
  }
  snackbarClose=()=>{
    this.setState({
       snackbarClose:false 
    })
}
  render() {
    const{deps,depid,depname}=this.state;
    let addModalClose=()=>this.setState({addModalShow:false})
    let editModalClose=()=>this.setState({editModalShow:false})
    return (
     <div>
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

         <Table className='mt-4' striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>DepartmentID</th>
                    <th>DepartmentName</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {deps.map(dep=>
                    <tr key={dep.ID}>
                       <td>{dep.ID}</td>
                       <td>{dep.DepartmentName}</td>
                       <td>
                        <ButtonToolbar>
                          <Button className='ml-2' variant='warning' onClick={()=>this.setState({
                            editModalShow:true,
                            depid:dep.ID,
                            depname:dep.DepartmentName
                          })}>
                            Edit
                          </Button>
                          <Button className='ml-2' variant='danger' onClick={()=>this.deletedep(dep.ID)}>
                            Delete
                          </Button>
                          <EditDepModal 
                          show={this.state.editModalShow}
                          onHide={editModalClose}
                          depid={depid}
                          depname={depname}
                          />
                        </ButtonToolbar>
                       </td>
                       
                   </tr>
                   )}
             
            </tbody>
      </Table>
      <ButtonToolbar>
        <Button onClick={()=>this.setState({addModalShow:true})}>
            Add Department
        </Button>
      </ButtonToolbar>
      <AddDepModal show={this.state.addModalShow} onHide={addModalClose}/>
     </div>
    )
  }
}
