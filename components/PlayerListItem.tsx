import React from 'react'
import {View,Text,Image,StyleSheet,Pressable} from 'react-native'
import {Player} from '../types'
import {useRecoilState,useRecoilValue} from 'recoil';
import {MyPlayerState} from '../atoms/myTeam';
import {myFormation} from '../atoms/myTeam'
interface Props{
    player:Player;
}

function PlayerListItem({player}:any) {

  const [myPlayers,setMyPlayers]=useRecoilState(MyPlayerState)
 const myFormations=useRecoilValue(myFormation)

  const numberOfPlayerOnPosition= myPlayers.filter(p=>p.position === player.position).length
  

  const onPress=()=>{
   setMyPlayers((currentPlayers)=>{
     
    if(currentPlayers.some((p)=>p.id === player.id)){
      return currentPlayers.filter(p=>p.id !== player.id)
    }
    if(numberOfPlayerOnPosition < myFormations[player.position]) {
     return [...currentPlayers,player]
    }
    return currentPlayers;
  })


 }

 const isSelected=myPlayers.some((p)=>p.id === player.id)

  return (
    <Pressable onPress={onPress} style={[styles.container,{backgroundColor:isSelected ? '#d170db':"white"}]}>
        <Image source={{uri:`https://media.api-sports.io/football/players/${player.id}.png`}} style={styles.image}/>
        <View style={{flexGrow:1}}>
            <Text style={styles.name}>{player.name}</Text>
            <Text>{player.match}</Text>
        </View>
        <View style={[styles.colContainer,{alignItems:'flex-end'}]}>
            <Text style={styles.name}>R{player.price/ 1000000}m</Text>
            <Text>{player.position}</Text>
        </View>
        <Text style={styles.points}>{player.totalPoints}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
container:{
  flexDirection:"row",
  width:"100%",
  justifyContent:"space-between",
  padding:5,
  alignItems:'center',
  borderBottomWidth:1,
  borderColor:"#ddd"
},
colContainer:{
 marginHorizontal:15
},
image:{
width:40,
height:40,
borderRadius:20,
borderWidth:1,
borderColor:"#ddd",
marginRight:10
},
name:{
fontWeight:"bold",

},
points:{
    fontWeight:"bold",
 fontSize:18
}
})
export default PlayerListItem