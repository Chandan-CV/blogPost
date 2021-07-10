import React,{useContext, useState } from 'react';

import BlogSave from '../components/BlogSave';
import { Context } from '../context/BlogContext';

const EditScreen=({navigation})=>
{ 
    const {editBlogPost}= useContext(Context);
    const data = navigation.getParam("data")
    const save=(title,content)=>{
        editBlogPost(data.id,title,content,()=>{navigation.navigate("Index screen")})
        
    }
return(
<BlogSave id={data.id} initContent={data.content} initTitle={data.title} onSaveClick={save}/>
);

}

export default EditScreen;