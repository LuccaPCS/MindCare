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
        <label>Gênero</label>
        <select
          style={{ maxWidth: "100px" }}
          name="genero"
          value={formData.genero}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <label>Idade</label>
        <input
          style={{ maxWidth: "100px" }}
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
