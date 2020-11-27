import React,{useState} from 'react';
import{View,Text,ScrollView,Button,TextInput,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const BlogSave=({initTitle,initContent,onSaveClick})=>
{
    const [title,setTitle] = useState(initTitle);
    const [content,setContent] = useState(initContent);
   return(
        <ScrollView style={{padding:20}}>
        <Text style={styles.label}>
        Title:
        </Text>
        <TextInput placeholder={"Enter the title of the blog"} style={styles.input} onChangeText={(text)=>setTitle(text)} value={title}/> 
       
        <Text style={styles.label}>
        Content:
        </Text>
        <TextInput placeholder={"Enter the content of the blog"} style={styles.input} multiline={true} onChangeText={(text)=>setContent(text)} value={content}  />
      <TouchableOpacity>
      <Button title="save blog post" onPress={()=>{onSaveClick(title,content)}}/>
      </TouchableOpacity>
       
        </ScrollView>

   );
}
const styles=StyleSheet.create({
input:{
        borderWidth:1,
        padding:8,
        fontSize:18,
        borderRadius:10,
        marginBottom:20

},
label:{
    fontSize:20,
    fontWeight:"bold"
}

});
export default BlogSave;