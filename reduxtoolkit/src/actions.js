// export const changeStatus  = ( status ) => {
//     return {
//         action : "CHANGE_STATUS",
//         payload : status
//     }
// }

import {createAction} from '@reduxjs/toolkit'

export const changeStatus = createAction('UPDATE_STATUS')
