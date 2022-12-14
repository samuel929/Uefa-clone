import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet ,Pressable,SafeAreaView,FlatList} from 'react-native';
import BottomSheet,{BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Field from '../components/Field';
import TeamStats from '../components/TeamStats';
import PlayersList from '../components/PlayersList';
import Filters from '../components/Filters';
export default function TabOneScreen() {
  const playersBottomSheet=useRef<BottomSheet>(null);
  const filtersBottomSheet=useRef<BottomSheet>(null)
  const viewPlayers=()=>{
    playersBottomSheet.current?.expand()
  }

  const snapPoints=[0,'50%']
  return (
    <SafeAreaView style={styles.container}>
       <TeamStats/>
       <Field/>
        <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
            <Text>View Players</Text>
        </Pressable>
        <BottomSheet
        ref={playersBottomSheet}
        index={0}
        snapPoints={snapPoints}
      >
         <Pressable onPress={()=>filtersBottomSheet.current?.expand()} style={[styles.buttonContainer,{marginTop:10}]}>
            <Text>Filters</Text>
        </Pressable>
        <View style={styles.contentContainer}>
         <PlayersList/>
        </View>
      </BottomSheet>
      <BottomSheet 
      ref={filtersBottomSheet} 
      index={0}
      snapPoints={snapPoints}>
         <Filters/> 
      </BottomSheet>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#72CC5e"
  },
  buttonContainer:{
    backgroundColor:"orange",
    width:'90%',
    margin:20,
    padding:10,
    alignItems:"center",
    borderRadius:50,
    marginTop:'auto'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
