import { atom } from 'recoil'

export const basketAtomState = atom({
    key : 'basketAtomStateKey',
    default : []
}) 


export const basketItemTotalAmountAtom = atom({
    key : 'basketItemTotalAmountAtomKey',
    default : 0,
})

export const getAgainAllItemtAtom = atom({
    key : 'getAgainAllItemtAtomKey',
    default : true,
})


// export const heartIconstatusAtom = atom({
//     key : 'heartIconstatusAtomKey',
//     default : false,
// })