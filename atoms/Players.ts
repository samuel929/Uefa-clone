import {atom,selector} from 'recoil'
import { players } from '../UEFA2020Assets/data/players'



export const allPlayersState=atom({
key:"AllPlayersState",
default:players
})

export const positionFilterState=atom({
    key:"positionFilterState",
    default:[] as string[]
})

export const filteredPlayers=selector({
key:"filteredPlayers",
get:({get})=>{
const players=get(allPlayersState);
const filters=get(positionFilterState);
return players.filter(
 (player)=> filters.length === 0 || filters.includes(player.position)
 );
}
})

