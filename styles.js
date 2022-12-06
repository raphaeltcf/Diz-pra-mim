import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    loadingScreen: {
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "110%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0008",
        opacity: 1,
        zIndex: 9999,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center', 
     
    },
    titulo:{
      fontSize:25,
      fontWeight:"bold",
      fontFamily: "Roboto_300Light"
    },
    botao:{
      borderRadius:20,
      paddingVertical:10,
      paddingHorizontal:40,
      backgroundColor:"black",
      marginTop:20,
    },
    textoBotao:{
    
      color:"white",
      fontFamily: " Roboto_500Medium"
    },
    resultado:{
      backgroundColor:"#7D5B8C",
      padding:20,
      margin:20,
      borderRadius:20,
   
    },
    textResultado:{
      fontFamily: " Roboto_500Medium",
      color:"white",
      textAlign:"center"
    },
    textAutor:{
      fontFamily: " Roboto_500Medium",
      color:"white",
      textAlign:"center",
      marginTop:10
    }
  
   
  });
  