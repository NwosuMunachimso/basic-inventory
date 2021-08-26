/** This component is for displaying each item in the record, passed to it from ItemList */
import React, { useState } from 'react';
import { ItemType } from '../TypeDefinitions';
//create the type for the anticipated props to be passed from parent component
type Props = {
    item: ItemType,
    handleUpdateItem: Function,
    handleCancelUpdate: Function
  
}
const EditItem: React.FC<Props> = (props) => {
    //prepare the data for state initialization with current data
    const initialItemState: ItemType = {
        id: props.item.id,
        name: props.item.name,
        category: props.item.category,
        price: props.item.price,
        in_stock: props.item.in_stock,
        detail: props.item.detail
    }
    //declare the state variable for item to be added from form. Notice that we are using an object containing the individual elements
    //We need to interact with them individually as state variable that will change in response to input onChange
    const [item, setItem] = useState<ItemType | any>({ ...initialItemState });
    //create a general onChange event handler for form inputs that fire onChange event
    const onChange = (event: any) => {
        const itemState = item;//check out item in state as is
        //modify element in the state which has the same name as the input that fired this event. Pass the new value
        itemState[event.target.name] = event.target.value;
        setItem({ ...itemState });//checkin the modified state
    }
    //function to handle form onSubmit event
    const onSubmit = (event: any) => {
        event.preventDefault();//do not do the default form submit to the server
        props.handleUpdateItem(item);//call the handleUpdateItem function passed via props.
    }
    //function to handle form onCancel
    const onCancel = () => {
        props.handleCancelUpdate();//call the function handleCancelAdd passed via props
    }  //Note where the above functions are used below within the return statement
    return (
        <div className="EditItem">
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit Item:</legend>
                    <ul className="form-wrapper">
                        <li>
                            <label htmlFor="id">Id</label>
                            <input type="hidden" name="id" value={item.id} readOnly />
                        </li>
                        <li className="form-row">
                            <label htmlFor='category'>Category</label>
                            <select id="category" name="category" value={item.category} onChange={onChange}>
                                <option selected={item.category === "Unclassified" ? true : false}
                                    value="Unclassified">Unclassified</option>
                                <option selected={item.category === "Food" ? true : false} value="Food">Food</option>
                                <option selected={item.category === "Drink" ? true : false} value="Drink">Drink</option>
                                <option selected={item.category === "Clothing" ? true : false} value="Clothing">Clothing</option>
                                <option selected={item.category === "Electronics" ? true : false} value="Electronics">Electronics</option>
                                <option selected={item.category === "Toiletries" ? true : false} value="Toiletries">Toiletries</option>
 </select>
 </li>
                    <li className="form-row">
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' placeholder="name of item ..." value={item.name}
                            onChange={onChange} required />
                    </li>
                    <li className="form-row">
                        <label htmlFor='price'>Price</label>
                        <input type='number' name='price' id='price' placeholder="price of item in naira..."
                            value={item.price} onChange={onChange} required />
                    </li>
                    <li className="form-row">
                        <label htmlFor='in_stock'>In Stock</label>
                        <input type='number' name='in_stock' id='in_stock' placeholder="how many in stock"
                            value={item.in_stock} onChange={onChange} required />
                    </li>
                    <li className="form-row">
                        <label htmlFor='detail'>Detail</label>
                        <input type='text' name='detail' id='detail' placeholder="Description" value={item.detail}
                            onChange={onChange} required />
                    </li>
 </ul>
                <input type='submit' value='Submit' /><input type='button' value='Cancel' onClick={onCancel} />
 </fieldset>
 </form>
 </div >
 );
}//It is the initial value of the state, so when the user does sth, it then takes it and puts it in the state and updates the state.

export default EditItem;