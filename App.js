import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Styles from './Styles'
import InputButton from './components/InputButton/index'
import InputRow from './components/InputRow/index'

export default function Calculator() {
  const [inputValue, setInputValue] = useState(0)
  const [previousValue, setPreviousValue] = useState(0)
  const [calcSymbol, setCalcSymbol] = useState('')

  // Define the input buttons that will be displayed in the calculator.
  const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', 'CE', '+'],
    ['=']
  ]

  function renderButtons() {
    return inputButtons.map((input, i) => (
      <InputRow key={'r' + i}>
        {input.map(key => (
          <InputButton key={key} onPress={handleOnPress} value={key} />
        ))}
      </InputRow>
    ))
  }

  function handleOnPress(value) {
    if (typeof value === 'number') setInputValue(inputValue * 10 + value)
    if (typeof value === 'string') handleSymbol(value)
  }

  function handleSymbol(symbol) {
    switch (symbol) {
      case 'CE':
        setInputValue(0)
        setCalcSymbol(undefined)
        break
      case '-':
      case '+':
      case '/':
      case '*':
        setCalcSymbol(symbol)
        setPreviousValue(inputValue)
        setInputValue(0)
      case '=':
        if (!calcSymbol) return
        setInputValue(eval(previousValue + calcSymbol + inputValue))
        setPreviousValue(0)
        setCalcSymbol('')
        break
      default:
        break
    }
  }

  return (
    <View style={Styles.appView}>
      <View style={Styles.displayView}>
        <Text style={Styles.displayValue}>{inputValue}</Text>
      </View>
      <View style={Styles.inputView}>{renderButtons()}</View>
    </View>
  )
}
