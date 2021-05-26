import React, {useState} from "react";

function Button(props) {
    const [isActive, setActive] = useState(false);

    function activeButton() {
        if (isActive === false) {
            setActive(true);
          } else {
            setActive(false);
          }
    }

  return <button
            style={isActive === false ? {backgroundColor: "#d80000"} : {backgroundColor: "#116600"}}
            onClick={activeButton}>
            {props.label}
        </button>
}

export default Button;