import {atom,selector} from 'recoil';
import { Player, Positions } from '../types';


export const myFormation=atom({
    key:"myFormation",
    default:{
        FWD:3,
        MID:3,
        DEF:4,
        GK:1
    }
})

export const MyPlayerState=atom({
    key:"MyPlayerState",
    default:[] as Player[]
});

const positions=['FWD','MID','DEF','GK'] as Positions[];

export const myPlayersByPosition=selector({
    key:"myPlayersByPosition",
    get:({get})=>{
        const players=get(MyPlayerState);
        const formation=get(myFormation)
        const groupedPlayers={}

        positions.forEach(position=>{
            groupedPlayers[position] = players.filter(p=>p.position === position)
            //Fill with null up to the amount expected players from formation
            for(let i  = groupedPlayers[position].length; i < formation[position];i++){
               groupedPlayers[position].push(null);
            }
        })
        return groupedPlayers;
    }
})