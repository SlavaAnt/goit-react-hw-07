import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getFilterContacts = (contacts, filter) => {
  console.log(contacts);
  if (filter.length > 0) {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        number.includes(filter.trim())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = getFilterContacts(contacts, filter);

  return (
    <ul className={css.contactsContainer}>
      {filterContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactBox}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
