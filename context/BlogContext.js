import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      console.log("adding the blog post")
      return [
        ...state,
        {
          title: action.payload.title,
          id: Math.floor(Math.random() * 99999),
          content: action.payload.content,
        },
      ];
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
const addBlogPost = (dispatch) => {
  return (title,content) => {
    dispatch({ type: "addBlog", payload:{title,content} });
  };
};
const editBlogPost =(dispatch)=>
{
  return(id,title,content,navi)=>{
    dispatch({type:"editBlogPost",payload:{id,title,content}})
    navi();
  }
}
const deleteBlogPost =(dispatch)=>
{
 
  return(id)=>
  {
   dispatch({type:"deleteBlogPost", payload:id})
  }
}


export const { Context, Provider } = createDataContext(
  reducer, 
  [{title:"Test Header",content:"Test constent lololollll",id:1}],
  {addBlogPost,deleteBlogPost,editBlogPost}
  );
