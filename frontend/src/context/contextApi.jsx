import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("general");
  const [currentpage, setCurrentpage] = useState(1);
  useEffect(() => {
    fetchdatafromapi(category, currentpage);
  }, [category, currentpage]);

  const fetchUserData = async () => {
    const res = await axios.get('/api/refetch'
    ).then((res) => {
      console.log(res.data)
      setUser(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchUserData()
  },[])
 const fetchdatafromapi = async (category, currentpage) => {
     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=12&page=${currentpage}&apiKey=f667f2f013184d4c8514c28ce2bf40ef`).then((response) => {
       console.log(response?.data.articles)
       setTimeout(()=>{
        setSearchResults(response?.data.articles)
       },3000) 
     }).catch((error) => {
       console.log(error)
     })
     return response
 }
  return (
    <Context.Provider
      value={{
       searchResults,
       category,
       setCategory,
       currentpage,
       setCurrentpage,
       user,
       setUser
      }}
    >
      {children}
    </Context.Provider>
  );
};