import React from "react";
import Inputbox from "./Inputbox";
import styles from "./infoteacher.module.css";
import Button from "./Button";
import { IoCloseCircle } from "react-icons/io5";

const Infoteacher = ({
  inputFields,
  onChangeForm,
  onClose,
  onSumitForm,
  buttonValue,
}) => {
  return (
    <div className={styles.containerForm}>
      <IoCloseCircle className={styles.close} onClick={onClose} />
      <form onSubmit={onSumitForm}>
        {inputFields.map((field, index) => (
          <Inputbox
            key={index}
            id={field.id}
            type={field.type}
            name={field.name}
            value={field.value}
            placeholder={field.placeholder}
            onChange={onChangeForm}
            label={field.label}
            visibility={field.visibility}
          />
        ))}
        <Button value={buttonValue} type="submit" />
      </form>
    </div>
  );
};

export default Infoteacher;
