import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { myContext } from './Context';

export default function AdminPage() {
  const ctx = useContext(myContext);

  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const deleteUser = () => {
    let userId;
    data.forEach(item => {
      if(item.username === selectedUser) {
        userId = item.id;
      }
    })


    axios.post("http://localhost:4000/deleteuser", {
      id: userId
    }, {
      withCredentials: true
    })

  }

  useEffect(() => {
    axios.get('http://localhost:4000/getallusers', {
      withCredentials: true
    }).then((res) => {
      setData(res.data.filter((item) => {
        return item.username !== ctx.username
      }))
    })
  }, [ctx]);

  if(!data){
    return null;
  }
  console.log(selectedUser);
  return (
    <div>
      <h1>Only Admins Can See This Page</h1>
      <select onChange={e => setSelectedUser(e.target.value)} name="deleteuser" id="deleteuser">
      <option key="Select A User">Select A User</option>

        {
          data.map(item => {
            return(
              <option key={item.username}>{item.username}</option>
            )
          })
        }
      </select>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}
