import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class WarehouseDetails extends React.Component{
    state = {warehouseName: '',
             email: '',
             phoneNumber: '',
             address: '',
             city: '',
             state: '',
             zipCode: ''};

    constructor(){
      axios.get('http://localhost:8000/warehouseprofile').then(
        res => {
          const values = res.data;
          console.log(values.data);
          this.setState({values: values.data})
          this.setState({warehouseName: values.data[0].warehouseName})
          this.setState({email: values.data[0].email})
          this.setState({phoneNumber: values.data[0].phoneNumber})
          this.setState({address: values.data[0].address})
          this.setState({city: values.data[0].city})
          this.setState({zipCode: values.data[0].zipcode})
          this.setState({state: values.data[0].state})
        });
    }

    render(){
        return (
            <form className="container">
                <h3 className="container list-group-item bg-secondary text-white">Warehouse Information</h3>
                <p>{this.state.warehouseName}</p>
                <p>{this.state.email}  {this.state.phoneNumber}</p>
                <p>{this.state.address}</p>
                <p>{this.state.city}  {this.state.state} {this.state.zipCode}</p>

                <div className="list-group-item">
                    <div className="row">Warehouse Name: {this.state.warehouseName}</div>

                    <div className="row">Email Address: {this.state.email}</div>

                    <div className="row">Phone Number: {this.state.phoneNumber}</div>

                    <div className="row">Street Address: {this.state.address}</div>

                    <div className="row">
                        <div className="col">City: {this.state.city}</div>

                        <div className="col">State: {this.state.state}</div>

                        <div className="col">Zip Code: {this.state.zipCode}</div>
                    </div>

                    <div>
                    <Link to='/inventory'><button type="button" className="btn btn-primary">Back to Inventory</button></Link>
                    </div>
                </div>
            </form>
        );
    }
}