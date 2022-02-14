
import { useEffect, useState } from "react";
import DataTable from "../Component/DataTable";
import Header from "../Component/Header";

function App() {
  const [userList, setUserList] = useState([]);
  const userDetails = JSON.parse(localStorage.getItem("loggedIn"))

  // userlist -localstotrage.get
  // setuser-localset
  const Delete = () => {
    setUserList([]);
  };
  //adding user...
  const Adduser = (user) => {
    user.id = userList.length + 1;
    let data = [...userList, user]
    setUserList(data);
    localStorage.setItem(userDetails.email, JSON.stringify(data));
  };

  useEffect(() => {
    if (localStorage.getItem(userDetails.email)) {
          let userListt = JSON.parse(localStorage.getItem(userDetails.email));
          setUserList(userListt);
        }
  }, []);
  
  //edit user....
  const EditUser = (user) => {
    let data = userList.map((iteam) => (user.id === iteam.id ? user : iteam))
    setUserList(data);
    localStorage.setItem(userDetails.email, JSON.stringify(data));
  };

  //Remove user....
  const RemoveUser = (id) => {
    let data = userList.filter((user) => user.id !== id)
    setUserList(data);
    localStorage.setItem(userDetails.email, JSON.stringify(data));
  };

  return (
    <div className="App">
      <Header Adduser={Adduser} Delete={Delete} />
      <DataTable
        userList={userList}
        RemoveUser={RemoveUser}
        EditUser={EditUser}
      />
    </div>
  );
}

export default App;