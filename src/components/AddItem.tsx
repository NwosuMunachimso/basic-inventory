/** This component is for displaying each item in the record, passed to it from ItemList */
import React, { useState } from 'react';
import { ItemType } from '../TypeDefinitions';
//create the type for the anticipated props to be passed from parent component
type Props = {
    handleCreateItem: Function,
    handleCancelCreate: Function
}
const AddItem: React.FC<Props> = (props) => {
    const initialItemState: ItemType = {//This is an object not type defintion. We are doing this so we dont have to create individual states for each of them.
        name: '',
        category: 'unclassified',
        price: 0,
        in_stock: 0,
        detail: ''
    }
    //declare the state variable for item to be added from form. Notice that we are using an object containing the individual elements(initialitemstate)
    //We need to interact with them individually as state variable that will change in response to input onChange
    const [item, setItem] = useState<ItemType | any>({ ...initialItemState });
    //create a general onChange event handler for form inputs that fire onChange event
    const onChange = (event: any) => {
        const itemState = item;//check out item in state as is. M this puts state item into another variable so we can manipulate
        //modify element in the state which has the same name as the input that fired this event. Pass the new value. M aspa assuming we input sth in name, price and stock, what this line does is that whatever name in the form itlll change the corresponding name in the state.
        itemState[event.target.name] = event.target.value;
        setItem({ ...itemState });//checkin the modified state
    }
    //function to handle form onSubmit event
    const onSubmit = (event: any) => {
        event.preventDefault();//do not do the default form submit to the server
        props.handleCreateItem(item);//call the handleAddItem function passed via props.
    }
    //function to handle form onCancel
    const onCancel = () => {
        props.handleCancelCreate();//call the function handleCancelAdd passed via props
    }
    //Note where the above functions are used below within the return statement
    return (
        <div className="AddItem">
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Add Item:</legend>
                    <ul className="form-wrapper">
                        <li className="form-row">
                            <label htmlFor='category'>Category</label>
                            <select id="category" name="category" value={item.category} onChange={onChange}>
                                <option value="Unclassified">Unclassified</option>
                                <option value="Food">Food</option>
                                <option value="Drink">Drink</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                        </li>
                        <li className="form-row">
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' placeholder="name of item ..."
                                value={item.name} onChange={onChange} required />
                        </li>
                        <li className="form-row">
                            <label htmlFor='price'>Price</label>
                            <input type='number' name='price' id='price' placeholder="price of item in
naira..." value={item.price} onChange={onChange} required />
                        </li>
                        <li className="form-row">
                            <label htmlFor='in_stock'>In Stock</label>
                            <input type='number' name='in_stock' id='in_stock' placeholder="how many in
stock" value={item.in_stock} onChange={onChange} required />
                        </li>
                        <li className="form-row">
                        <label htmlFor='detail'>Detail</label>
                        <input type='text' name='detail' id='detail' placeholder="Description" value={item.detail}
                            onChange={onChange} required />
                    </li>
                    </ul>
                    <input type='submit' value='Submit' /><input type='button' value='Cancel'
                        onClick={onCancel} />
                </fieldset>
            </form>
        </div>
    );
}
export default AddItem;