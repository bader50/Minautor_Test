import { Box, ModalContainer, Overlay } from "./Modal.styles";
import { AiOutlineClose } from "react-icons/ai";
import ModalForm from "./ModalForm.component";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ isOpen, onClose }: Props) {
  return isOpen ? (
    <ModalContainer>
      <Overlay>
        <Box>
          <AiOutlineClose onClick={() => onClose()} />
          <ModalForm onClose={onClose} />
        </Box>
      </Overlay>
    </ModalContainer>
  ) : null;
}

export default Modal;
