import React, { Component } from 'react';

class EditRecord extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            matriculationNumber: '',
            address: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            firstName: nextProps.firstName,
            lastName: nextProps.lastName,
            matriculationNumber: nextProps.matriculationNumber,
            address: nextProps.address,
        });
    }

    firstNameHandler(e) {
        this.setState({ firstName: e.target.value });
    }

    lastNameHandler(e) {
        this.setState({ lastName: e.target.value });
    }
    
    matriculationNumberHandler(e) {
        this.setState({ matriculationNumber: e.target.value });
    }
    
    addressHandler(e) {
        this.setState({ address: e.target.value });
    }

    handleSave() {
        const student = this.state;
        this.props.saveEditRecord(student)
        
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Record</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">FirstName:</span>
                            <input className="form-control" value={this.state.firstName} 
                            onChange={(e) => this.firstNameHandler(e)} /></p>
                            <p><span className="modal-lable">LastName:</span>
                            <input className="form-control" value={this.state.lastName}
                             onChange={(e) => this.lastNameHandler(e)} /></p>
                            <p><span className="modal-lable">Matriculation#:</span>
                            <input className="form-control" value={this.state.matriculationNumber}
                             onChange={(e) => this.matriculationNumberHandler(e)} /></p>
                            <p><span className="modal-lable">Address:</span>
                            <input className="form-control" value={this.state.address} 
                            onChange={(e) => this.addressHandler(e)} /></p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditRecord;