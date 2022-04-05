import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class TableRowInventory extends Component {

    constructor(props) {
        super(props);
        this.deleteInventoryItem = this.deleteInventoryItem.bind(this);
    }

    deleteInventoryItem() {
        axios.delete('http://localhost:8070/inventory/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Item successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td style={{color:"darkgray"}}>{this.props.obj.itemId}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.itemName}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.stock}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.stockIn}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.stockOut}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.unitPrice}</td>
                <td style={{color:"darkgray"}}><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td>
                <td style={{width:"270px"}}>
                    <Link className="edit-link" to={`/editInven-stockM/${this.props.obj._id}/${this.props.obj.itemId}/${this.props.obj.itemName}/${this.props.obj.stock}/${this.props.obj.stockIn}/${this.props.obj.stockOut}/${this.props.obj.unitPrice}/${this.props.obj.date}/${this.props.obj.photo}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                        {" "}
                        <Button size="sm" onClick={() => window.location.reload(true) , this.deleteInventoryItem} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                        {" "}
                        <a href="/view"><Button
                        type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>
                    
                </td>
            </tr>
        );
    }
}