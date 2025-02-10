import { Dropdown } from "react-bootstrap";
import React from "react";
//Edit menu used to toggle edit or delete functionality in a dropdown.
const MenuToggle = React.forwardRef(({ onClick }, ref) => (
  <i
      className="fas fa-pencil-alt"
      href=""
      ref={ref}
      onClick={(e) => {

          e.preventDefault();
          onClick(e);

      }}
  ></i>
));

export const EditMenu = ({ handleEdit, handleDelete }) => {

  return (
      <Dropdown drop="left">
          <Dropdown.Toggle as={MenuToggle}></Dropdown.Toggle>

          <Dropdown.Menu className="text-center">
              <Dropdown.Item onClick={handleEdit} aria-label="edit">
                  <i className="fas fa-edit" />
              </Dropdown.Item>
              <Dropdown.Item onClick={handleDelete} aria-label="delete">
                  <i className="fas fa-trash" />
              </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
  );

};
