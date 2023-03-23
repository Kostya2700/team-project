import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PetsList from '../PetsList/PetsList';
import { Modal } from '../PetsData/Modal';
import { ModalAddsPet } from 'components/UserPage/PetsData/ModalAddsPet';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const PetsData = ({pets}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Box ml={{ xl: '32px' }} w="100%">
      <Flex
        direction="baseline"
        justifyContent="space-between"
        pt={{ base: '40px', md: '20px', xl: '0px' }}
        mb={{ base: '26px', md: '22px', xl: '24px' }}
      >
        <Heading
          as="h2"
          my="auto"
          fontSize={{ base: '20px', md: '28px' }}
          lineHeight={{ base: '1.35' }}
          fontWeight={{ base: '500' }}
        >
          My pets:
        </Heading>
        <Button
          aria-label="add pet"
          onClick={onOpen}
          rightIcon={
            <BsFillPlusCircleFill size="40px" fill="#F59256" m="0px" />
          }
          bg="transparent"
          fontSize={{ base: '20px', md: '28px' }}
          color="black"
          lineHeight={{ base: '1.35' }}
          fontWeight={{ base: '500' }}
          type="button"
          px="0px"
          _hover={{ color: 'accent.accentOrange' }}
          transitionProperty={'color'}
          transitionDuration={'250ms'}
          transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
        >
          <Text mr="7px">Add pet</Text>
        </Button>
      </Flex>
      <PetsList />
      <Modal isOpen={isOpen} onClose={onClose} title={'Add pet'}>
        <ModalAddsPet onClose={onClose} />
      </Modal>
    </Box>
  );
};

export default PetsData;

//import PropTypes from 'prop-types';

//import Pet from "./Pet/Pet";

// export default function PetsData() {
/*return (
    <>
      {error && <p>Error loading, please try again </p>}

      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <div>
          {visibleContacts.map(({ id, photo, name, birthday, breed, comments}) => (
            <Pet key={id} id={id} name={name} birthday={birthday} 
            breed={breed} photo={photo} comments={comments}/>
          ))}
        </div>
      )}
    </>
  );*/
// }

/*PetsData.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      photo:PropTypes.image.isRequired,
      name: PropTypes.string.isRequired,
      birthday: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
    })
  ),
};
*/