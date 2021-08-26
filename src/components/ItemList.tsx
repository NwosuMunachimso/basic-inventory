import React from 'react';
import { ItemType } from '../TypeDefinitions';
import ItemListHeader from './ItemListHeader';
import Item from './Item';
//declare type for Props passed to this
type Props = {
    items: Array<ItemType>,
    handleDeleteItem: Function, 
    handleEditItem: Function, //not used in this component, but only for passing same function to the next layer, Item
    handleViewDetail:Function
}
const ItemList: React.FC<Props> = (props) => {

    //prepare items for display in a table
    let itemListRows = null;
    itemListRows = props.items.map((item) => {//M display item component each time and pass these functions each time too.
     return <Item item={item} handleDeleteItem={props.handleDeleteItem} handleEditItem={props.handleEditItem} handleViewDetail={props.handleViewDetail}/> //pass item and handleDeleteItem to Item component each time
    })
    return (
        <div>
            <table>
                <caption>Inventory Items</caption>
                <ItemListHeader />
                {itemListRows}
            </table>
        </div>
    );
}
export default ItemList;