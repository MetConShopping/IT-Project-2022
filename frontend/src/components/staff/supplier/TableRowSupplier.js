import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class TableRowSupplier extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(supid) {
        axios.delete(`http://localhost:8070/supplier/delete/${supid}`)
            .then((res) => {
                toast("Success! Supplier Deleted");
                window.location.reload(true);
            }).catch((error) => {
                console.log(error)
            })

    }

    render() {
        return (
            <tr>
                <td style={{ color: "darkgray" }}>{this.props.obj.supid}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.fullname}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.address}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.experience}</td>
                <td style={{ color: "darkgray" }}>{this.props.obj.itempurchesed}</td>
                <td style={{ color: "darkgray" }}><img src={"images/" + this.props.obj.photo} style={{ width: "100px", height: "100px" }}
                    className="border border-danger rounded-circle"
                /></td>
                <td style={{ width: "270px" }}>
                    <Link className="edit-link" to={`/EditSupplier/${this.props.obj._id}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                    {" "}
                    <Button size="sm" onClick={() =>  this.deleteStudent(this.props.obj.supid)} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                    {" "}
                    <a href="/edit-supplier"><Button
                        type="submit" size="sm"
                        className="btn btn-primary"
                    ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>

                </td>
                <ToastContainer style={{ marginTop: "50px" }} />
            </tr>

        );
    }
}