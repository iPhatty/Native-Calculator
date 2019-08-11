import React from 'react'
import { View } from 'react-native'
import Styles from '../../Styles'

export default function InputRow({ children }) {
  return <View style={Styles.inputRowView}>{children}</View>
}
