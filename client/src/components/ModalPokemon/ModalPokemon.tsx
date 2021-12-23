import React from 'react';
import {
  Backdrop,
  Modal,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ModalContent from './ModalContent';
import { ThemeCustom } from '../../theme';

const useStyles = makeStyles((theme: ThemeCustom) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.light,
    borderRadius: 30,
    //boxShadow: "20px 20px 60px #bd394e, -20px -20px 60px #ff4d6a",
    margin: "24px",
    padding: "12px",
  },
}));


export default function ModalPokemon(pokemon: any): JSX.Element {
  const classes = useStyles();

  const { open, handleClose } = pokemon;
  return (
    <Modal
      // aria-labelledby="spring-modal-title"
      // aria-describedby="spring-modal-description"
      className={classes.container}
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <ModalContent {...pokemon} />
    </Modal>
  );
}
