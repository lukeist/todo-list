import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";

const ListsButton = ({ showLists, setShowLists }) => {
  const toggleLists = () => {
    setShowLists(!showLists);
  };
  return (
    <nav>
      <h1>Todo Lists</h1>
      <button onClick={toggleLists}>
        All Lists &nbsp;
        <FontAwesomeIcon icon={faThList} />
      </button>
    </nav>
  );
};
export default ListsButton;
