import { atom } from 'recoil'

export const addItemDoneState = atom({
    key : 'addItemDoneStateKey',
    default : false
}) 

export const deleteUserDoneState = atom({
    key : 'deleteUserDoneStateKey',
    default : false
}) 

export const addCatDoneState = atom({
    key : 'addCatDoneStateKey',
    default : false
}) 


export const orderStatusState = atom({
    key : 'orderStatusStateKey',
    default : 'Order Placed'
}) 

export const orderIdForUpdateOrderState = atom({
    key : 'orderIdForUpdateOrderStateKey',
    default : []
}) 

export const orderUpdatedState = atom({
    key : 'orderUpdatedStateKey',
    default : false
}) 


export const isAddressAddesState = atom({
    key : 'isAddressAddesStateKey',
    default : false
}) 

export const URLState = atom({
    key : 'URLStateKey',
    default : 'https://aaumartbackend.pratikvansh.repl.co/api/product'
}) 