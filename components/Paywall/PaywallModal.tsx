import Cookies from 'js-cookie';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box, 
  Text,
  Link
} from "@chakra-ui/core";

import { OnePagerPublicData } from "../../model/model";
import { CheckoutForm } from './CheckoutForm';

const viewed1 = Cookies.get('viewed1');
const viewed2 = Cookies.get('viewed2');

export const PaywallModal = ({ onePagers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Conditionally renders links depending on whether they've been viewed
  return (
    <>
      {onePagers.map((onePagerData: OnePagerPublicData) => {
        let name = onePagerData.companyName;
        if (name === viewed1 || name === viewed2) {
          return (
            <Box key={name} marginBottom='10px'>
              <Link href={`/${onePagerData.url}`}>{name}</Link>
              <Text margin='0'>{onePagerData.briefDescription}</Text>
            </Box>
          )
        } else {
          return (
            <Box key={name} marginBottom='10px'>
              <a onClick={onOpen}>{name}</a>
              <Text margin='0'>{onePagerData.briefDescription}</Text>
            </Box>
          )
        }}
      )}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>OnePager Free Views Have Run Out</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            OnePager is the best way to build, share, and analyze your raise in
            one place. Pay now to continue using this amazing service.
            <Box id="checkout" className="hidden">
              <CheckoutForm onClose={onClose}/>
            </Box>
          </ModalBody>
          <ModalFooter id="footer">
            <Button variant="ghost" mr={3} onClick={onClose}>
              No Thank You
            </Button>
            <Button variantColor="blue" onClick={loadCheckout}>PAY</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const loadCheckout = () => {
  document.getElementById('footer').setAttribute('class', 'hidden')
  document.getElementById('checkout').removeAttribute('class')
}
