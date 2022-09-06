import { atom } from 'recoil'

export const basketAtomState = atom({
    key : 'basketAtomStateKey',
    default : []
}) 


export const basketItemTotalAmountAtom = atom({
    key : 'basketItemTotalAmountAtomKey',
    default : 0,
})