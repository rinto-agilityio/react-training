import React, { memo, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import style
import './styles/DropdownStyle.css'

export const Dropdown = props => {
  const { items, classWrapper, classItem } = props;

  const node = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (!node.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const handleClickDropdown = () => {
    setOpen(!open)
  }

  return (
    <div ref={node} className='dropdown-wrap'>
     <div onClick={handleClickDropdown} className='arrow-down'></div>
      {
        open &&
        <ul
          className={`dropdown-menu-wrap ${classWrapper ? ` ${classWrapper}` : ''}`}
        >
          {items.length > 0 &&
            items.map(item => (
              <li
                key={item}
                className={`dropdown-item${
                  classItem ? ` ${classItem}` : ''
                }`}
              >
                {item}
              </li>
            ))}
        </ul>
      }
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
  classWrapper: PropTypes.string,
  classItem: PropTypes.string,
};

Dropdown.defaultProps = {
  items: [],
  classWrapper: null,
  classItem: null,
};

export default memo(Dropdown);
