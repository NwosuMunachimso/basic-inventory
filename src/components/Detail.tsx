import React, { useState } from 'react';
import { ItemType } from '../TypeDefinitions';

//create the type for the anticipated props to be passed from parent component
type Props = {
    item: ItemType,
    handleCancelView: Function
}

const Detail: React.FC<Props> = (props) => {
    const onCancel = () => {
        props.handleCancelView();//call the function handleCancelAdd passed via props
    }  //Note where the above functions are used below within the return statement
    return (
        <div>
        <label>View Detail:</label>
        
            <ul>
                <li>{props.item.detail}</li>
                <button onClick={onCancel}>Cancel</button>
            </ul>
        </div>
       
    );

}
export default Detail;