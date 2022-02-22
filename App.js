import React from 'react'
import { View, ScrollView, StatusBar } from 'react-native';
import Header from './src/components/Header/index.js';
import Tabs from './src/components/Tabs/index.js';
import Feedpage from './src/components/Feedpage/index.js';
import PostCard from './src/components/Feedpage/PostCard/index.js';

const App = () => {
  return (
    <View style={{flex: 1}} backgroundColor="black">
      <StatusBar backgroundColor="black"/>
      <Header />
      <ScrollView>
          <Feedpage>
          <PostCard />
          </Feedpage>
        </ScrollView>
      <Tabs />
    </View>
    
  );
}

export default App;
