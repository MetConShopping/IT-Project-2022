import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class TableRowCustomer extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8070/customer/delete/' + this.props.obj.nic)
            .then((res) => {
                toast("Success! Customer Deleted");
            }).catch((error) => {
                console.log(error)
            })

    }

    render() {
        return (
            <tr>
                <td style={{ color: "darkgray" }}>{this.props.obj.nic}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.name}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.age}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.gender}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.address}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.contactNo}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.email}</td>
                <td style={{ color: "darkgray" }}><img src={"images/" + this.props.obj.photo} style={{ width: "100px", height: "100px" }}
                    className="border border-danger rounded-circle"
                /></td>
                <td style={{ width: "270px" }}>
                <Link className="edit-link" to={`/editcustomer/${this.props.obj._id}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit </Button>
                    </Link >
                    {" "}
                    <Button size="sm" onClick={() => window.location.reload(true), this.deleteStudent} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                    {" "}
                    <a href="/edit-customer"><Button
                        type="submit" size="sm"
                        className="btn btn-primary"
                    ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>

                </td>
                <ToastContainer style={{ marginTop: "50px" }} />
            </tr>

        );
    }
}