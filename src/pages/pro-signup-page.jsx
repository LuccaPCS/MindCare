import { useState } from "react";
import CommonFieldsForm from "../features/Form/common-fields-form.jsx";
import ProForm from "../features/Form/pro-form.jsx";
import styles from "../features/Form/form.module.css";

export default function ProSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    especialidade: "",
    experiencia: "",
    apresentacao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2>Cadastro de Profissional</h2>
      <div className={styles.formContainer}>
        <CommonFieldsForm formData={formData} handleChange={handleChange} />
        <ProForm formData={formData} handleChange={handleChange} />
      </div>
      <button className={styles.submitButton}>Concluir</button>
    </>
  );
}
