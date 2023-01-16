import { ContactItem } from 'components/ContactItem/ContactItem';
import { ItemList, Item } from './ContactListStyle';
import { getContacts,getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ItemList>
       {getFilteredContacts().map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem name={name} id={id} number={number} />
          </Item>
        );
      })}
    </ItemList>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
