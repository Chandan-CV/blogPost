import JasonServer from "../api/JasonServer";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "getBlogPost":
      return action.payload;
     case "editBlogPost":
       return state.map((blogpost)=>{
        if(blogpost.id === action.payload.id)
        {
          return action.payload;
        }
        else{
          return blogpost
        }
       })
    case "deleteBlogPost":
      console.log("deleting: ",action.payload)
      console.log(state)
      return state.filter((blogpost) => blogpost.id !== action.payload);

    default:
      return state;
  }
};

const getBlogPost =(dispatch) =>
{
return async()=>{
const response =await JasonServer.get("/blogposts")

dispatch({type:"getBlogPost",payload:response.data})
}

}


const addBlogPost = (dispatch) => {
  return async (title,content,callback) => {
    await JasonServer.post("/blogposts",{title,content})
    callback();
  };
};
const editBlogPost =(dispatch)=>
{
  return async(id,title,content,navi)=>{
    await JasonServer.put(`/blogposts/${id}`,{title,content})
    
    dispatch({type:"editBlogPost",payload:{id,title,content}})
    navi();
  }
}
const deleteBlogPost =(dispatch)=>
{
 
  return async(id)=>
  {
  await JasonServer.delete(`/blogposts/${id}`);
 dispatch({type:"deleteBlogPost",payload:id})
  }
}


export const { Context, Provider } = createDataContext(
  reducer, 
  [],
  {addBlogPost,deleteBlogPost,editBlogPost,getBlogPost}
  );
