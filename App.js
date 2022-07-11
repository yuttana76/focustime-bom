import  React,{ useState } from 'react';
import { Text, View, StyleSheet,SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { colors } from './src/utils/colors'
import { Focus } from './src/Features/Focus'
import { Timer } from './src/Features/Timer'
import { FocusHistory } from './src/Features/FocusHistory'

export default function App() {
  const [currentSubject,setCurrentSubject]  = useState(null)
  const [history,setHistory]  = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory  history={history} />
        </>
      ):(
          <Timer 
            focusSubject={currentSubject}
            onTimerEnd={(subject)=>{
              setHistory([...history, subject])
            }}
            clearSubject={()=>setCurrentSubject(null)}
          />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.gold,
  },
});

