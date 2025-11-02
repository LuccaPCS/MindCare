export default function ProForm({ formData, handleChange }) {
  return (
    <>
      <div>
        <label>Preferências de atendimento:</label>
        <textarea
          name="preferencias"
          value={formData.preferencias}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
}
