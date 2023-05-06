import ContactListItem from "./ContactListElement";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import css from "../App.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
