import { css } from "@emotion/react";
import { MainTheme } from "../../core/themes";
import makeStyles from "@material-ui/core";

export const SearchBar = css`
  margin-left: auto;
  padding-right: ${MainTheme.spacing(0.1)}rem;
  color: white !important;
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'yellow',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
`;
