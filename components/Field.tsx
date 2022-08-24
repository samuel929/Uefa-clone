import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import Player from './Player';
import {useRecoilValue} from 'recoil'
import {myPlayersByPosition} from '../atoms/myTeam'
// const players:{[key:string]:null[]}={
//   FWD:[null,null,null],
//   MID:[null,null,null],
//   DEF:[null,null,null,null],
//   GK:[null]
// }
function Field() {

  const players=useRecoilValue(myPlayersByPosition)
  console.log(players)
  return (
    <ImageBackground
    resizeMode="contain"
    source={require('../UEFA2020Assets/images/field.jpg')} style={{width:"100%",aspectRatio:2/3,justifyContent:'space-around',alignItems:"center"}}>
     {Object.keys(players).map((position)=>(
       <Player  players={players} position={position}/>
     ))}
    </ImageBackground>
  )
}

export default Field