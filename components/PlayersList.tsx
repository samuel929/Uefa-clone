import React from 'react'
import BottomSheet,{BottomSheetFlatList} from '@gorhom/bottom-sheet';
import PlayerListItem from './PlayerListItem';
//import { players } from '../UEFA2020Assets/data/players';
import {useRecoilState} from 'recoil';
import {allPlayersState,filteredPlayers} from '../atoms/Players'
function PlayersList() {
    const [players,setPlayer]=useRecoilState(filteredPlayers)

    
  return (

          <BottomSheetFlatList
            data={players}
            renderItem={({item})=>(
              <PlayerListItem player={item}/>
            )}
          />
  )
}

export default PlayersList