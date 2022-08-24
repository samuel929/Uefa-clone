import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as React from 'react'
import {RecoilRoot} from 'recoil'
import TabOneScreen from './screens/TabOneScreen';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
         <TabOneScreen/>
         </RecoilRoot>
         <StatusBar />
      </SafeAreaProvider>
    );
  }
}
