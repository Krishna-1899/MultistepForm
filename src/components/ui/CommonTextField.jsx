import { InputAdornment, TextField, Tooltip } from "@mui/material";
import React from "react";
const CommonTextField = ({
  label = "",
  onChange,
  variant = "outlined",
  error = null,
  rightIcon = null,
  type = "text",
  onClickRighIcon,
  className,
  padding,
  value,
  name,
  id,
  ...props
}) => {
  return (
    <span>
      <TextField
        id={id}
        name={name}
        type={type}
        fullWidth
        label={label || ""}
        value={value}
        variant={variant}
        onChange={onChange}
        error={!!error}
        helperText={error}
        {...props}
        size="small"
        inputProps={{
          style: {
            padding: padding ? padding : "",
          },
        }}
        className={className ? className : ""}
        slotProps={
          rightIcon
            ? {
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className="cursor-pointer"
                      onClick={
                        onClickRighIcon ? () => onClickRighIcon() : () => {}
                      }
                    >
                      {rightIcon}
                    </InputAdornment>
                  ),
                },
              }
            : {}
        }
      />
    </span>
  );
};
export default CommonTextField;
