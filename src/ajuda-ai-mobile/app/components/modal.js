import * as React from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { theme } from "../theme";

const Modal = ({ open, handleClose, onConfirm, title, textContent }) => {
  return (
    <Portal>
      <Dialog
        visible={open}
        onDismiss={handleClose}
        style={{ backgroundColor: theme.colors.background }}
      >
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodySmall">{textContent}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode="contained" onPress={onConfirm}>
            Confirmar
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Modal;
