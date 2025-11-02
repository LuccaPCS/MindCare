export default function ProForm({ formData, handleChange }) {
  return (
    <>
      <div>
        <label>Especialidade:</label>
        <input
          type="text"
          name="especialidade"
          value={formData.especialidade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Apresentação:</label>
        <textarea
          name="apresentacao"
          value={formData.apresentacao}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
}
