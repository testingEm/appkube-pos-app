import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height:'auto',
    width:"90%",
    flex: 1,
    // backgroundColor: "#fff",
    padding: 10,
    justifyContent: "start",
    alignItems: 'center',
    gap: '10px',
    marginVertical:'auto',
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  bgDark: {
    backgroundColor: "#31572c",
  },
  bgLight: {
    backgroundColor: "#d8f3dc",
  },
  light:{
    color: "#d8f3dc",
  },
  white: {
    color: "white",
  },
  dark: {
    color: "#31572c",
  },
  active:{
    borderWidth: 1,
    borderColor: '#31572c', 
  },

  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  textInput: {
    borderColor: "#31572c",
    borderWidth: 1,
    borderRadius: 5,
    width:"100%",
    padding: 10,
    
  },
  button: {
    backgroundColor: "#31572c",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    color:'#d8f3dc'
  },
 
 
  
});
