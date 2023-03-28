import { SafeAreaView, Text, View , StyleSheet, TextInput , KeyboardAvoidingView} from 'react-native'
import React, { Component } from 'react'
import styles from './src/css/style'


export default class App extends Component {
  render() {
    return (
     <SafeAreaView style={styles.sf}>
      <View style={styles.view}>
        <Text style={styles.nome}>Lucas Aragão</Text>
      </View>

      <View style={styles.chat}>
        <Text style={styles.msg}>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</Text>
        </View>
    
      
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputTxt}
          multiline
          keybo
          value='Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.'
        />
      </View>
     </SafeAreaView>
    )
  }
}
