import React from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native'
import {useRecoilState} from 'recoil'
import {positionFilterState} from '../atoms/Players'

const positions=['FWD','MID','DEF','GK']

function Filters() {

  const [positionFilter,setPositionFilter]=useRecoilState(positionFilterState)

  //Selecting and deselcting filters
  const onFilterPress=(position:string)=>{
   setPositionFilter((current)=>{
    if(current.includes(position)){
       return current.filter((pos)=>pos !== position)
    }else{
    return [...current,position]
    }
    })
  }

  const isSelected=(position:string)=>{
    return positionFilter.includes(position)
  }
  return (
    <View style={styles.container}>
        {positions.map((item)=>(
        <Pressable onPress={()=>onFilterPress(item)} style={[styles.filterContainer,{backgroundColor: isSelected(item)? 'purple':"#ddd"}]}>
        <Text style={styles.text}>{item}</Text>
        </Pressable>
        ))}
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flexDirection:'row',
      width:'100%',
     justifyContent:'space-between',
     padding:10
    },
    filterContainer:{
        backgroundColor:"#ddd",
        width:50,
        height:50,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center"
    }
    ,
    text:{
      
    }
})
export default Filters