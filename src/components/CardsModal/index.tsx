import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react"
import { CardsTable } from "../CardsTable"

type CardsModalProps = {
    pipeId: string
    isOpen: boolean
    onClose: () => void
}

export function CardsModal({isOpen, onClose, pipeId}: CardsModalProps) {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <CardsTable pipeId={pipeId}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }