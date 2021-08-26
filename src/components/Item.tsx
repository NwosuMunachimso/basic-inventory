/** This component is for displaying each item in the record, passed to it from ItemList */
import React from 'react';
import { ItemType } from '../TypeDefinitions';
type Props = {
    item: ItemType,
    handleDeleteItem: Function, //props is expected to also contain the function that will handle delete
    handleEditItem: Function, //props is expected to also contain the function that will handle edit
    handleViewDetail:Function
}
const Item: React.FC<Props> = (props) => {
    //callback function for delete button onClick event. We could have also embedded this function definition directly rather than define it first here
    const onDeleteItem = () => {
        props.handleDeleteItem(props.item.id); //notice here that we are calling invoking the handleDeleteItem() passed down through props
    };
    const onEditItem = () => {
        props.handleEditItem(props.item.id); //notice here that we are calling invoking the handleUpdateItem() passed down through props
    };//M I think each item has it own handleedititem and handledeleteitem. Becxause in itemlist when we passed item props to item component, we passed handledelte/edit item each time.
    const onViewDetail = () => {
        props.handleViewDetail(props.item.id);  
    }
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.category}</td>
            <td>{props.item.price}</td>
            <td>{props.item.in_stock}</td>
            <td><button onClick={onViewDetail}>View Detail</button></td>     
            <td><button onClick={onEditItem}>Edit</button></td>
            <td><button onClick={onDeleteItem}>Delete</button></td>
        </tr>
    );
}
export default Item;