import React,{useState,useContext} from "react"
import {View,Text,StyleSheet,ScrollView,TextInput, Button} from 'react-native';
import BlogSave from "../components/BlogSave";
import { Context } from "../context/BlogContext";

const CreateScreen=({navigation})=>
{
    const addClicked=(title,content)=>
    {
        addBlogPost(title,content,()=>{navigation.navigate("Index screen")})
    }
    const {addBlogPost} = useContext(Context);
   return(
       <BlogSave initContent={""} initTitle={""} onSaveClick={addClicked}/>
   );
}
export default CreateScreen;