/*This module is for defining custom type definitions required
anywhere in my codes
Each definition using the keyword interface is exported for use
in other modules.
*/
/** The type for each item record */
export interface ItemType {
    id?: number, //We are adding question mark here so we can use same type when the data being handled does not include the id.
    category: string,
    name: string,
    price: number,
    in_stock: number,
    detail: string
};