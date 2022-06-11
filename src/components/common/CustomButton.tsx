import React from "react";
import { Spinner, Button } from "reactstrap";

type ButtonProps = {
    // type : 'button' | su
}

const CustomButton = ({
  type = "button",
  className = "",
  disabled = false,
  onButtonClick = () => {},
  color = "primary",
  text = "buttons.sumbit",
  loading = false,
  size = "sm",
}) => {
  return (
    <Button
      size={size}
    //   type={type}
      className={className}
      onClick={onButtonClick}
      color={color}
      disabled={disabled}
    >
      {loading ? <Spinner className="mr-1" size="sm" /> : null}
      {text}
    </Button>
  );
};

export default CustomButton;
