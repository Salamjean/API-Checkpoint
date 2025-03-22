import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Importez le fichier CSS

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>Liste des Utilisateurs</h1>
      <ul className="user-list">
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>Email: {user.email}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Ville: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;