import React from 'react';
import {
  Backdrop,
  Modal,
} from "@mui/material";

import ModalContent from './ModalContent';


export default function ModalPokemon(pokemon: any): JSX.Element {
  const { open, handleClose } = pokemon;
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <ModalContent {...pokemon} />
    </Modal>
  );
}
