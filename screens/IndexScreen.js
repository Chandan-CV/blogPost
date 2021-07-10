import React, { useContext,useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import {Context} from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons'; 


const IndexScreen = ({navigation}) => {
  
  const { state,deleteBlogPost,getBlogPost } = useContext(Context);
  useEffect(()=>{
    getBlogPost();

    const listener=navigation.addListener("didFocus",()=>{
      getBlogPost();
    })

    return ()=>{
      listener.remove()
    }
  },[])
  
  return (
    <View style={styles.main}>
     
    
      <FlatList
        data={state}
        keyExtractor={(data) => (data.id).toString()}
        
        renderItem={({ item }) => {
          return( 
            <View style={styles.row}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Show Screen",{item})}}>
          <View style={{width:300}}>
          <Text style={styles.title}>{item.title}- id {item.id}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}}>
          <Feather name="trash" size={26} color="black"/>
          </TouchableOpacity>
          
          </View>
          
          ); 
        }}
      />
    </View>
  );
};
IndexScreen.navigationOptions=({navigation})=>{
  
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create Screen')}>
          <Feather name="plus" size={30} style={{marginHorizontal:20}} />
        </TouchableOpacity>
      ),
    };
  };


const styles = StyleSheet.create({
  main: {
    backgroundColor: "lightgrey",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    padding: 20,
  },
  row:
  {
    flexDirection:"row",
    justifyContent:"space-between",
    padding:5,
    marginVertical:10,
    borderWidth:1,
    borderRadius:10
  },
  title:
  {
    fontSize:18,
    marginVertical:5
  }
});
export default IndexScreen;
