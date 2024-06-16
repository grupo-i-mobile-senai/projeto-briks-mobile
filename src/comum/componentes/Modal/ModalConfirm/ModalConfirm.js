import React from "react";
import { AlertDialog, Button, Center } from "native-base";

const ModalConfirm = ({ isOpen, onClose, onConfirm }) => {
  const cancelRef = React.useRef(null);

  return (
    <Center>
      {/* <Button colorScheme="danger" onPress={onClose}>
        Delete Customer
      </Button> */}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Confirmação</AlertDialog.Header>
          <AlertDialog.Body>
            Tem certeza que deseja excluir este item?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancelar
              </Button>
              <Button colorScheme="danger" onPress={onConfirm}>
                Excluir
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default ModalConfirm;
