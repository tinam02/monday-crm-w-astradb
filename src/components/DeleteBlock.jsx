import React from "react";

const DeleteBlock = () => {
  const deleteTicket = () => {};
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
       x
      </div>
    </div>
  );
};

export default DeleteBlock;
