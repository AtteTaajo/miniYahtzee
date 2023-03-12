import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 45,
    marginBottom: 15,
    backgroundColor: '#263133ff',
    flexDirection: 'row',
  },
  footer: {
    
    backgroundColor: '#263133ff',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  dicepoints:{
    flexDirection: 'row',
    width: 280,
    alignContent: 'center',
    


  }, 
  home:{
    margin: 10,
    alignItems: 'center', 
  },
  text:{
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  },
  text2:{
    fontSize: 15,
    textAlign: "center",
    padding: 5,
  },
  but:{
    backgroundColor: "lightblue",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  inp:{
    marginVertical: 20,
    fontSize: 20,
  },
  points:{
    fontSize: 20,
    paddingLeft: 13

  }
});