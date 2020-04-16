import React from 'react';

//page to change an item's settings, NOT make a new item

export class ItemDetails extends React.Component{
    state = {itemID: '',
             itemName: '',
             itemDescription: '',
             numInStock: '',
             price: '',
             itemType: '',
             familySafe: false,
             timeToAssemble: '',
             availableToPackage: false
            };

    submit(){
        //update database with state
        this.setState({itemID: '', 
                       itemName: '',
                       itemDescription: '',
                       numInStock: '',
                       price: '',
                       itemType: '',
                       familySafe: false,
                       timeToAssemble: '',
                       availableToPackage: false});
    }

    render(){
        return (
            <form className="container">
                <h3 className="container list-group-item bg-secondary text-white">Change Warehouse Settings</h3>
                <div className="list-group-item">
                    <div className="form-row">
                        <div className="form-group col-3">
                            <label htmlFor="itemID">Item ID</label>
                            <input type="text"
                                id="itemID"
                                name="itemID"
                                className="form-control"
                                value={this.state.itemID}
                                onChange={e => this.setState({ itemID: e.target.value })}/>
                        </div>
                        <div className="form-group col-9">
                            <label htmlFor="itemName">Item Name</label>
                            <input type="text"
                                id="itemName"
                                name="itemName"
                                className="form-control"
                                value={this.state.itemName}
                                onChange={e => this.setState({ itemName: e.target.value })}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-4">
                            <label htmlFor="numInStock">Stock</label>
                            <input type="text"
                                id="numInStock"
                                name="numInStock"
                                className="form-control"
                                value={this.state.numInStock}
                                onChange={e => this.setState({ numInStock: e.target.value })}/>
                        </div>

                        <div className="form-group col-4">
                            <label htmlFor="price">Price</label>
                            <input type="text"
                                id="price"
                                name="price"
                                className="form-control"
                                value={this.state.price}
                                onChange={e => this.setState({ price: e.target.value })}/>
                        </div>

                        <div className="form-group col-4">
                            <label htmlFor="timeToAssemble">Assembly Time</label>
                            <input type="text"
                                id="timeToAssemble"
                                name="timeToAssemble"
                                className="form-control"
                                value={this.state.timeToAssemble}
                                onChange={e => this.setState({ timeToAssemble: e.target.value })}/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col">
                            <label htmlFor="itemType">Item Type</label>
                            <select
                                id="itemType"
                                name="itemType"
                                className="form-control"
                                value={this.state.itemType}
                                onChange={e => this.setState({ itemType: e.target.value })}>
                                    <option value='Chairs'>Chairs</option>
                                    <option value='Technology'>Technology</option>
                                    <option value='Kitchen'>Kitchen</option>
                                    <option value='Desks'>Desks</option>
                                    <option value='Appliances'>Appliances</option>
                                    <option value='Cleaning supplies'>Cleaning Supplies</option>
                                    <option value='Books'>Books</option>
                                </select>
                        </div>

                        <div className="form-group col">
                            <label htmlFor="state">Family Safe</label>
                            <input type="checkbox"
                                id="familySafe"
                                name="familySafe"
                                className="form-control"
                                checked={this.state.familySafe}
                                onChange={e => this.setState({ familySafe: e.target.value })}/>
                        </div>

                        <div className="form-group col">
                            <label htmlFor="availableToPackage">Package Available</label>
                            <input type="checkbox"
                                id="availableToPackage"
                                name="availableToPackage"
                                className="form-control"
                                checked={this.state.availableToPackage}
                                onChange={e => this.setState({ availableToPackage: e.target.value })}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="itemDescription">Description</label>
                            <textarea id="itemDescription"
                                name="itemDescription"
                                className="form-control"
                                value={this.state.itemDescription}
                                onChange={ e => this.setState({ itemDescription: e.target.value }) } />
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={ () => this.submit() }>Submit</button>
                </div>
            </form>
        );
    }
}