import { atom } from 'recoil'

export const addItemDoneState = atom({
    key : 'addItemDoneStateKey',
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