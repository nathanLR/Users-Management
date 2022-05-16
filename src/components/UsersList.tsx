import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { setUsers } from "../features/users/usersSlice";

const UsersList = () => {
  const dispatch = useDispatch();

  // fetching users data and dispatch it to the store
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)));
  }, []);

  // ====== this fetching wasnt working ====

  // useEffect(() => {
  //     const getUsers = async () => {
  //         const usersFetched = await fetchUsers();
  //         dispatch(setUsers(usersFetched));
  //     }

  // },[])
  // const fetchUsers = async () => {
  //     const reponse = await fetch("http://localhost:5000/users");
  //     const data = await reponse.json().catch((err) => {console.log(err)})
  //     console.log(data)
  //     return data;
  // }
  // ========================================

  //retrieve data from the store to display it to ant design table
  const users = useAppSelector((state) => state.users.value);

  // variable containing the differents columns the table will have
  const columns = [
    {
      title: 'Prénom',
      dataIndex: 'firstname',
      key: 'firstname'
    },
    {
      title: 'Nom',
      dataIndex: 'lastname',
      key: 'lastname'
    },
    {
      title: 'Adresse Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Utilisateur',
      dataIndex: 'role',
      render: (text: Number) => {
        let role = "";
        switch(text){
          case 1: role = "Administrateur"; break;
          case 2: role = "Intégrateur"; break;
          case 3: role = "Auditeur"; break;
          default: role = "Undefined";
        }
        return role;
      },
      key: 'role'
    }
  ]
  console.log(users);

  return (
    <Table dataSource={users} columns={columns} rowKey="id" pagination={false}></Table>
  );
};

export default UsersList;
