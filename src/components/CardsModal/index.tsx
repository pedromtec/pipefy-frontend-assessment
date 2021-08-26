import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { usePipesContext } from '../../contexts/PipesContext'
import { CardsTable } from '../CardsTable'

export function CardsModal() {
  const { selectedPipe, setSelectedPipe } = usePipesContext()

  const isOpen = !!selectedPipe

  const handleClose = () => {
    setSelectedPipe(undefined)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="xl"
        isCentered
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedPipe?.name} - Cards</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardsTable pipeId={selectedPipe?.id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
