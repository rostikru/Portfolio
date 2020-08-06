import { BUY_CAKE } from './cakeTypes'
import { BAKE_CAKE } from './cakeTypes'


export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const bakeCake = () => {
    return {
        type: BAKE_CAKE
    }
}

