import { SelectChangeEvent } from "@mui/material"
import React, { Dispatch, ReactNode, SetStateAction } from "react"


type SearchProps = {
  searchName: string,
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchNumber: string,
  handleChangeNumber: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchType: string,
  handleChangeType: any,
}

export default SearchProps