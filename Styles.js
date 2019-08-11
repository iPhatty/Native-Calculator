import { StyleSheet } from 'react-native'

const colors = {
  black: '#1a1a1a',
  white: '#fafafa',
  red: '#904E55'
}

const Styles = StyleSheet.create({
  appView: {
    flex: 1
  },
  displayView: {
    flex: 2,
    backgroundColor: colors.black,
    justifyContent: 'center',
    padding: 10
  },
  displayValue: {
    color: colors.white,
    fontSize: 55,
    fontWeight: 'bold'
  },
  inputView: { flex: 8, backgroundColor: colors.red },
  inputButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white
  },
  inputButtonText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold'
  },
  inputRowView: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default Styles
