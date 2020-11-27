import React,{useContext} from "react"
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Context } from "../context/BlogContext";
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
const ShowScreen=({navigation})=>
{
    
    const {state, addBlogPost, deleteBlogPost}= useContext(Context)
    const data = navigation.getParam("item")
    const blogPost = state.find((blogpost)=>  blogpost.id === data.id )      
    
    return(
        <ScrollView>
        <View style={{alignItems:"center",padding:20,marginHorizontal:20}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>
        {data.title}
        </Text>
        </View>
        
        
        <View style={styles.content}>
        <Text style={{fontSize:18}}>
        {data.content}
        </Text>
        </View>
        </ScrollView>

    );

}
ShowScreen.navigationOptions=({navigation})=>
{
    return{
        headerRight:()=>(
        <TouchableOpacity onPress={()=>navigation.navigate("Edit Screen",{data:navigation.getParam("item")})}>
          <FontAwesome name="pencil" size={35} color="black" style={{marginHorizontal:20}} />
        </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
 content:{
    alignItems:"center",
    padding:20,
    marginHorizontal:20,
    marginVertical:20 ,
    backgroundColor:"lightgrey",
    borderRadius:10

 }

})
export default ShowScreen;