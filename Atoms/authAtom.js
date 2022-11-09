import { atom } from 'recoil'

export const isAdminAtomState = atom({
    key : 'isAdminAtomStateKey',
    default : false
}) 

export const profileState = atom({
    key : 'profileStateKey',
    default : []
}) 