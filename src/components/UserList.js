import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import "./UserList.css";

// Import PNG images
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';
import person4 from '../assets/images/person4.png';
import person5 from '../assets/images/person5.png';
import person6 from '../assets/images/person6.png';
import person7 from '../assets/images/person7.png';
import person8 from '../assets/images/person8.png';
import person9 from '../assets/images/person9.png';
import person10 from '../assets/images/person10.png';

const images = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const usersPerPage = 10; // Set number of users per page

  useEffect(() => {
    fetch("https://jsonplaceholder.org/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAddUser = () => {
    setIsAdding(true);
    setSelectedUser({
      firstname: "",
      lastname: "",
      email: "",
      birthDate: "",
      login: { username: "" },
    });
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setIsAdding(false);
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    }
  };

  const handleSaveUser = (savedUser) => {
    if (isAdding) {
      const newId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
    const newUser = { ...savedUser, id: newId }; 
    setUsers((prev) => [...prev, newUser]);
      // setUsers((prev) => [...prev, savedUser]);
    } else {
      setUsers((prev) =>
        prev.map((user) => (user.id === savedUser.id ? savedUser : user))
      );
    }
    setShowForm(false);
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="user-list">

      <button className="add-user-btn" onClick={handleAddUser}>
        Add User
      </button>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="user-grid">
        {currentUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            images={images}
            onEdit={() => handleEditUser(user)}
            onDelete={() => handleDeleteUser(user.id)}
          />
        ))}
      </div>
      
      {showForm && (
        <UserForm
          user={selectedUser}
          isAdding={isAdding}
          onClose={() => setShowForm(false)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
};

export default UserList;
