import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import Styles from '../../Styles'

export default function InputButton({ onPress, value }) {
  return (
    <TouchableHighlight
      onPress={() => onPress(value)}
      style={Styles.inputButtonView}
      underlayColor={'#522d31'}
    >
      <Text style={Styles.inputButtonText}>{value}</Text>
    </TouchableHighlight>
  )
}
