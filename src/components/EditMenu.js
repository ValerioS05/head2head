import React from "react";
import { Dropdown } from "react-bootstrap";

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

export const EditMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={MenuToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Orange
        </Dropdown.Item>
        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
