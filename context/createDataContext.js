import React, { useReducer } from "react";

const Context = React.createContext();

export default (reducer, initialState, action) => {
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
   
   
    //actions =={ addBlogPost:(dispatch)=>{return()=>{ random stuff }}}
   const boundActions={};
   for(let key in action)
   {
       boundActions[key]= action[key](dispatch);
   }
   
    return <Context.Provider value={{state , ...boundActions}}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
