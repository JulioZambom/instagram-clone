import React from 'react'
import {
   View,
   ScrollView,
   StatusBar, 
  } from 'react-native';


import Header from './src/components/Header';
import SubHeader from './src/components/SubHeader';
import Tabs from './src/components/Tabs';
import Feedpage from './src/components/Feedpage';
import PostCard from './src/components/Feedpage/PostCard';

const App = () => {
  return (
    <View style={{flex: 1}} backgroundColor="black">
      <StatusBar backgroundColor="black"/>
      <Header />
      <ScrollView>
        <ScrollView horizontal={true}>
         <SubHeader /> 
        </ScrollView>
          <Feedpage>
          <PostCard />
          </Feedpage>
        </ScrollView>
      <Tabs />
    </View>
    
  );
}

export default App;
