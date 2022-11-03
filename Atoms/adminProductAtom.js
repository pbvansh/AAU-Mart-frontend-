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
    key : 'addCatDoneStateKey',
    default : 'Order Placed'
}) 