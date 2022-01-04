import {
  Box,
  TextField,
  FormControl,
  MenuItem,
} from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import ParseColorType from "../../hooks/ParseColorType";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";

import SearchProps from '../../types/Search';
import { types } from './types';
import { ThemeCustom } from "../../theme";
import { makeStyles, styled } from "@mui/styles";


const CssTextField = styled(TextField)({

  '& label.Mui-focused': {
    color: '#e1f2fe',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e1f2fe',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e1f2fe',
    },
    '&:hover fieldset': {
      borderColor: '#e1f2fe',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e1f2fe',
    },
  },
});

export default function SearchBar({
  searchName,
  handleChangeName,
  searchNumber,
  handleChangeNumber,
  searchType,
  handleChangeType
}: SearchProps): JSX.Element {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: !matches ? "column" : "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box m={2}>
        <CssTextField
          type="text"
          label="Name"
          value={searchName}
          onChange={handleChangeName}
          InputLabelProps={{
            style: {
              color: '#e1f2fe'
            }
          }}
          InputProps={{
            style: {
              color: '#e1f2fe'
            }
          }}
        />
      </Box>
      <Box m={2}>
        <CssTextField
          type="number"
          label="Number"
          value={searchNumber}
          onChange={handleChangeNumber}
          InputLabelProps={{
            style: {
              color: '#e1f2fe'
            }
          }}
          InputProps={{
            style: {
              color: '#e1f2fe'
            }
          }}
        />
      </Box>
      <Box m={2}>
        <FormControl
          variant="outlined"
        >
          <CssTextField
            select
            InputLabelProps={{
              style: {
                color: '#e1f2fe'
              }
            }}
            InputProps={{
              style: {
                color: '#e1f2fe',
                textAlign: 'center',
              }
            }}
            label="Type"
            value={searchType}
            onChange={handleChangeType}
            sx={{ minWidth: 120, }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {types.map((type: string) => (
              <MenuItem key={type} value={type}>
                <Box
                  sx={{
                    color: "#FFF",
                    borderRadius: 9,
                    maxWidth: 50,
                    fontWeight: 900,
                    paddingLeft: 2,
                    paddingRight: 2,
                    fontSize: 12,
                  }}
                  bgcolor={ParseColorType(type)}>
                  {CustomToUpperCase(type)}
                </Box>
              </MenuItem>
            ))}
          </CssTextField>
        </FormControl >
      </Box >
    </Box >
  )
};