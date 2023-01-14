import { PhoneBook } from './PhoneBookForm/PhoneBook';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
   return (
    <>
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList/>
      </Section>
    </>
  );
};
