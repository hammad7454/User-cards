import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserDialog from "./UserDialog";
import "../styles/UserCard.css";

const MultiActionAreaCard = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users"
    );
    return response.data.data.users; //
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleOpenDialog = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedUser(null);
  };
   if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Failed to load users. Please try again.</p>;
  return (
    <div className="usercard-container">
      <div className="usercard-header">
        <h1>Our Team</h1>
        <h3>
          Meet our Crew Members
        </h3>
      </div>

      <ul className="usercard-list">
        {data?.map((curElem) => (
          <li key={curElem.id}>
            <div className="usercard-card">
              <img
                src={curElem.avatar}
                alt="avatar"
                className="usercard-avatar"
              />
              <div className="usercard-content">
                <div className="usercard-title">
                  {curElem.firstname} {curElem.lastname}
                </div>
                <div className="usercard-desc">
                  {curElem.description?.slice(0, 60)}...
                </div>
                <button
                  className="usercard-btn"
                  onClick={() => handleOpenDialog(curElem)}
                >
                  View More
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <UserDialog
        open={open}
        handleClose={handleCloseDialog}
        user={selectedUser}
      />
    </div>
  );
};

export default MultiActionAreaCard;
