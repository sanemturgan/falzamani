export default function CustomerHistory({ classes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  return (
    <li className={classes.btminfolist}>
      <div className={classes.infofal}>
        <h6>Kahve Falı</h6>
      </div>
      <div className={classes.payanddetails}>
        <div className={classes.addComment}>
          <Button
            backgroundColor="inherit"
            color="gray"
            onClick={onOpen2}
            mr="16px"
          >
            Yorum Yap
          </Button>

          <Modal isOpen={isOpen2} onClose={onClose2}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Yorum Yap</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <GigEditable value="Yorum Yap" />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" mr={2} onClick={onClose2}>
                  Çıkış
                </Button>
                <Button colorScheme="green" variant="ghost">
                  Kaydet
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className={classes.details}>
          <Button backgroundColor="inherit" color="gray" onClick={onOpen}>
            Detay Oku
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Fal Detayı</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Fal Detayı</p>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </li>
  );
}
