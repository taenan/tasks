import React, {Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={todayImage}>

        </ImageBackground>
        <View style={taskList}>
          <Text>TaskList</Text>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  background: {
    flexGrow: 3
  },
  taskList: {
    flexGrow: 7
  }
})