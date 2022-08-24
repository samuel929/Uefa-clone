import React from 'react'
import {View,Text} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';



function Player({players,position}:any) {
  console.log(players?.name,"sam")
  return (
    <View style={{flexDirection:"row",width:"100%",justifyContent:"space-around"}}>
    {players[position].map((item:any)=>(
      <View style={{alignItems:"center"}}>
      <FontAwesome5 name="tshirt" size={35} color={item ?'#d170db' :'#5c5c5cbb'}/>
      <Text style={{backgroundColor:"#333333bb",color:"white",fontWeight:"bold",padding:2,paddingHorizontal:7,fontSize:12}}>{position}</Text>
      </View>
    ))}
  </View>
  )
}

export default Player