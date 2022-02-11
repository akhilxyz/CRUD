import AddForm from '../Component/AddForm';
import Curd from '../Component/Crud';
import { useEffect, useState } from 'react';
import EditForm from '../Component/EditForm';

export default function Home() {
  const [userList, setUserList] = useState([]);

  const [isEdit, setisEdit] = useState()
  const[userDetails, setuserDetails] = useState('')

  const Adduser = (user) => {
    setisEdit(false)
    user.id = userList.length + 1;
    let newUser = [...userList, user]
    setUserList(newUser);
    localStorage.setItem("userList", JSON.stringify(newUser));
  };

  const GetData = () => {
    if (localStorage.getItem("userList")) {
      let userListt = JSON.parse(localStorage.getItem("userList"));
      setUserList(userListt);
    }
  };
  
  useEffect(() => {
    GetData();
  }, []);
  
  
  const EditUser = (user) => {
    const update = userList.map((iteam) => (user.id === iteam.id ? user : iteam))
    localStorage.setItem("userList", JSON.stringify(update));
    setUserList(update);
    setisEdit(false)
  };

  const EditUserdetails = (user) => {
    setisEdit(true)
    setuserDetails(user)
    console.log("user", user)
    // setUserList(userList.map((iteam) => (user.id === iteam.id ? user : iteam)));
  };

  const RemoveUser = (id) => {
    let remUser = userList.filter((user) => user.id !== id)
    setUserList(remUser);
    localStorage.setItem("userList", JSON.stringify(remUser));
  };


  return (
    <div className="App">{
      isEdit ?
      <EditForm type='Update' currentUser={userDetails} EditUser={EditUser}/>
      :
      <AddForm addUser={Adduser} type='Login' />
      }
      <Curd 
       users={userList}
       deleteUser={RemoveUser}
       editUser={EditUserdetails}
      />
    </div>
  );
}

