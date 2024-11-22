import { Button, CircularProgress } from "@mui/material";
const AppButton = ({
  type,
  variant = "contained",
  className,
  onClick,
  disabled,
  text,
  startIcon,
  color,
  loading,
  size = "medium",
  ...props
}) => {
  return (
    <Button
      type={type}
      loading={loading}
      variant={variant}
      className={className ?? "rounded"}
      startIcon={startIcon}
      color={color ?? "primary"}
      onClick={onClick}
      disabled={disabled}
      sx={{ mt: 1 }}
      size={size}
      {...props}
    >
      {/* {text} */}
      {loading ? <CircularProgress className="" size={20} /> : text}
    </Button>
  );
};
export default AppButton;
