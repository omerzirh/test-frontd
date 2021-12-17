import React from "react"

const service = {
  fetchItems: (body) => {
    return fetch(`${process.env.REACT_APP_IAGON_GET_URL}`, {
      method: 'GET',
    });
  },
 
  uploadFile : (body) =>{
      return  fetch(`${process.env.REACT_APP_IAGON_GET_URL}`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      }
      
      
      )
  }
}

export default service