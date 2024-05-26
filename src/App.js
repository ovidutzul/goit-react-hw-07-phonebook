import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { ContactsCounter } from 'components/contactCounter/contactCounter';
import Filter from './components/Filter/Filter';
import { fetchContacts } from 'redux/contactsSlice';

import css from './components/ContactForm/ContactForm.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title_1}>Phonebook</h1>
      <ContactsCounter />
      <ContactForm />
      <h2 className={css.title_2}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
