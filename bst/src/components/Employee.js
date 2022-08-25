import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import { AddEmpModal } from './AddEmpModal';
import {Button,ButtonToolbar} from 'react-bootstrap'; 
import { EditEmpModal } from './EditEmpModal';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
export class Employee extends Component {
    
  constructor(props)
  {
    super(props);
    this.state={
      emps:[],
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
    fetch('http://localhost:63874/api/Employees')
    .then((response) => response.json())
    .then((data) =>
        this.setState({
          emps:data
        })
    );
    
  }

 /* componentDidUpdate()
  {
    this.refleshlist();
  }
  */

  deleteemp(empid)
  {
   if(window.confirm('Are you sure?'))
   {
        fetch('http://localhost:63874/api/Employees/'+empid,{
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
    const{emps,empid,empname,empdep,empmail,empdoj}=this.state;
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
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Department</th>
                    <th>Employee MailID</th>
                    <th>Employee DOJ</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {emps.map(emp=>
                    <tr key={emp.EmployeeID}>
                       <td>{emp.EmployeeID}</td>
                       <td>{emp.EmployeeName}</td>
                       <td>{emp.Department}</td>
                       <td>{emp.MailID}</td>
                       <td>{emp.DOJ}</td>
                       <td>
                        <ButtonToolbar>
                          <Button className='ml-2' variant='warning' onClick={()=>this.setState({
                            editModalShow:true,
                            empid:emp.EmployeeID,
                            empname:emp.EmployeeName,
                            empdep:emp.Department,
                            empmail:emp.MailID,
                            empdoj:emp.DOJ
                          })}>
                            Edit
                          </Button>
                          <Button className='ml-2' variant='danger' onClick={()=>this.deleteemp(emp.EmployeeID)}>
                            Delete
                          </Button>
                          <EditEmpModal 
                          show={this.state.editModalShow}
                          onHide={editModalClose}
                          empid={empid}
                          empname={empname}
                          empdep={empdep}
                          empmail={empmail}
                          empdoj={empdoj}
                          />
                        </ButtonToolbar>
                       </td>
                       
                   </tr>
                   )}
             
            </tbody>
      </Table>
      <ButtonToolbar>
        <Button onClick={()=>this.setState({addModalShow:true})}>
            Add Employee
        </Button>
      </ButtonToolbar>
      <AddEmpModal show={this.state.addModalShow} onHide={addModalClose}/>
     </div>
    )
  }
}
