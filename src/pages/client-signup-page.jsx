import { useState } from "react";
import CommonFieldsForm from "../features/Form/common-fields-form.jsx";
import ClientForm from "../features/Form/client-form.jsx";
import styles from "../features/Form/form.module.css";
import Navbar from "../features/Navbar/navbar.jsx";

export default function ClientSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    preferencias: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2>Cadastro de Cliente</h2>
      <div className={styles.formContainer}>
        <CommonFieldsForm formData={formData} handleChange={handleChange} />
        <ClientForm formData={formData} handleChange={handleChange} />
      </div>
      <button className={styles.submitButton}>Concluir</button>
    </>
  );
}
