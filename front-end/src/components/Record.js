import React, {Component} from 'react';
import EditRecord from './EditRecord';
class Record extends Component{
 
    constructor(props){
        super(props);
        this.state={
            Index: 0,
            students: [],
            
        };
        this.updateIndex=this.updateIndex.bind(this);
        this.saveEditRecord=this.saveEditRecord.bind(this);

    }

    componentDidMount(){
    
        fetch("/students", {
         headers: {
                 "Access-Control-Allow-Origin": "http://localhost:8080",
                 "Accept": "application/json",
                 "Content-Type": "application/json"
               }
        }).then(response =>
         response
           .json()
           .then(data => this.setState({students: data}))
       );
       const r = 4;
     }
     updateIndex(index){
         this.setState(
             {
                 Index:index
             }
         );
     }
     saveEditRecord(student) {
        const Index = this.state.Index;
        let tempstudent = this.state.students;
        tempstudent[Index] = student;
        this.setState({ student: tempstudent });
      }

     render() {    
        const Students = this.state.students.map((student, index) => {
          return (
            <tr key={index}>
                <td>{index}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.matriculationNumber}</td>
              <td>{student.address}</td>

               
              <td>
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                  onClick={() => this.updateIndex(index)}>edit</button> {" "}
              </td>
            </tr>
          )
        });
        
        const Index = this.state.Index;

       let modalData = this.state.students[Index];
        console.log(modalData);
        //console.log(modalData.lastName);
        return (
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>StudentService-Man Task</h1>
              <h6>Edit Fuctionality</h6>
            </div>
            <table className="table table-striped">
                <thead>
                    <th>#</th>
                    <th>FirstName</th>
                    <th>LasttName</th>
                    <th>Matriculation</th>
                    <th>Address</th>
                </thead>
              <tbody>
                {Students}
              </tbody>
            </table>
            <EditRecord
             //firstName={this.state.students.firstName}
            // lastName={modalData.lastName}
            // matriculationNumber={modalData.matriculationNumber}
            // address={modalData.address}
             saveEditRecord={this.saveEditRecord}
            />

          </div>
        );
      }

}
export default Record;

