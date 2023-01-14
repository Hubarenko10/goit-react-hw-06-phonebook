// import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { ContactItemStyle, Btn, Text, Number } from './ContactItemStyle';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number,  }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
  dispatch(deleteContacts(contactId));
  }

  return (
    <ContactItemStyle>
      <Text>
        <AiOutlineUser fill="red" /> {name}: <Number>{number}</Number>
      </Text>
      <Btn
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Btn>
    </ContactItemStyle>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// 
// };
