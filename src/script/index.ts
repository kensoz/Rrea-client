// ##############################
// *
// * events bus
// *
// ##############################

import mitt from 'mitt'
import type { IUserSchema } from '../types/Index'

// types
type Events = {
  changeMode: boolean
  changeNetwork: boolean
  sendData: IUserSchema[]
}

const emitter = mitt<Events>()
export default emitter
