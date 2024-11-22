// import {
//   Autocomplete,
//   InputAdornment,
//   TextField,
//   Tooltip,
// } from "@mui/material";
// import React from "react";
// const AutoComplete = ({
//   label,
//   isTooltipShow = true,
//   variant = "outlined",
//   onChange,
//   loading = false,
//   options = [],
//   error = "",
//   required = false,
//   value,
//   isSmall = true,
//   style = {},
//   isUpperCase = true,
//   ...props
// }) => {
//   options = options || [];
//   let selectedValues = value;
//   if (options.length > 0 && typeof options[0] === "object") {
//     selectedValues = find(options, (option) => option.id == value);
//   }

//   const handleOnChange = (event, selectedOption) => {
//     if (selectedOption) {
//       console.log("selectedOption", selectedOption);
//       selectedOption =
//         typeof selectedOption === "object"
//           ? { ...selectedOption, label: selectedOption.label }
//           : selectedOption;
//     }
//     console.log("after change ", selectedOption);
//     onChange(event , selectedOption);
//   };

//   return (
//     <Tooltip title={isTooltipShow ? label : ""} arrow placement="top-start">
//       <span>
//         <Autocomplete
//           {...props}
//           onChange={handleOnChange}
//           options={loading ? [{ label: "Loading...", id: "Loading" }] : options}
//           getOptionLabel={(option) =>
//             isUpperCase
//               ? option?.label?.toUpperCase() || option?.toUpperCase()
//               : option?.label || option
//           }
//           defaultValue={selectedValues}
//           value={selectedValues || null}
//           renderOption={(props, option) => (
//             <li {...props} key={option.id || option.label || option}>
//               {option.label || option}
//             </li>
//           )}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label={label}
//               required={required}
//               size={isSmall ? "small" : "medium"}
//               variant={variant}
//               error={!!error}
//               helperText={error}
//               InputProps={{
//                 ...params.InputProps,
//                 endAdornment: (
//                   <React.Fragment>
//                     {loading ? (
//                       <CircularProgress color="primary" size={15} />
//                     ) : null}
//                     {params.InputProps.endAdornment}
//                   </React.Fragment>
//                 ),
//                 sx: style,
//               }}
//             />
//           )}
//         />
//       </span>
//     </Tooltip>
//   );
// };
// export default AutoComplete;
import {
  Autocomplete,
  CircularProgress,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";

const AutoComplete = ({
  name, // Field name for formik
  label,
  value, // The current value of the field
  onChange, // Formik's handleChange or setFieldValue
  isTooltipShow = true,
  variant = "outlined",
  loading = false,
  options = [],
  error = "",
  required = false,
  isSmall = true,
  style = {},
  isUpperCase = true,
  ...props
}) => {
  const selectedValue = options.find((option) => option.id === value) || null;

  const handleOnChange = (event, selectedOption) => {
    const newValue = selectedOption ? selectedOption.id : "";
    onChange(name, newValue); // Update the formik field value
  };

  return (
    <Tooltip title={isTooltipShow ? label : ""} arrow placement="top-start">
      <span>
        <Autocomplete
          {...props}
          value={selectedValue}
          onChange={handleOnChange}
          options={loading ? [{ label: "Loading...", id: "Loading" }] : options}
          getOptionLabel={(option) =>
            isUpperCase
              ? option?.label?.toUpperCase() || option?.name?.toUpperCase()
              : option?.label || option
          }
          renderOption={(props, option) => (
            <li {...props} key={option.id || option.label || option}>
              {option.label || option.name}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              required={required}
              size={isSmall ? "small" : "medium"}
              variant={variant}
              error={!!error}
              helperText={error}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="primary" size={15} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
                sx: style,
              }}
            />
          )}
        />
      </span>
    </Tooltip>
  );
};

export default AutoComplete;
