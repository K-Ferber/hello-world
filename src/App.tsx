import { useState } from "react";

function App(){
  return(
  <CharakterForm/>
  )
}




function CharakterForm(){
  const [characters, setCharacters] = useState<any[]>([]);
  const [opisCounter, setOpisCounter] = useState(0);

const [formData, setFormData] = useState({
  imie: "",
  rasa: "wybierz",
  klasa: "wybierz",
  poziom: 1,
  opis: "",
  czyPubliczny: true
});
  const [errors, setErrors] = useState<any>({})


  function handleChange(event: any) {
    const { name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function validateForm() {
    const errors: any = {};

    if (formData.imie.length < 3 || formData.imie.length > 20) {
      errors.imie = "Imię musi mieć od 3 do 20 znaków.";
    }

    if (formData.rasa === "wybierz") {
      errors.rasa = "Proszę wybrać rasę.";
    }

    if (formData.klasa === "wybierz") {
      errors.klasa = "Proszę wybrać klasę.";
    }

    if (formData.poziom < 1 || formData.poziom > 100) {
      errors.poziom = "Poziom musi być w zakresie od 1 do 100.";
    }

    if (formData.opis.length > 200) {
      errors.opis = "Opis nie może przekraczać 200 znaków.";
    }

    return errors;
  }


function handleSubmit(event: any) {
  event.preventDefault();

  const validationErrors = validateForm();

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    console.log("Formularz zawiera błędy:", validationErrors);
  } else {
    console.log("Formularz został poprawnie wypełniony:", formData);
    setCharacters([...characters, formData]);
  }
}

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imie">Imię postaci:</label>
        <input 
          type="text" 
          value={formData.imie}
          onChange={handleChange}
          name="imie"
        />
        {errors.imie && <span style={{ color: "red" }}>{errors.imie}</span>}
        <br/>
        <label htmlFor="rasa">Rasa:</label>
        <select 
          value={formData.rasa}
          onChange={handleChange}
          name="rasa"
        >
          <option value="wybierz" disabled>Wybierz rasę</option>
          <option value="czlowiek">Człowiek</option>
          <option value="elf">Elf</option>
          <option value="krasnolud">Krasnolud</option>
          <option value="ork">Ork</option>
        </select>
        {errors.rasa && <span style={{ color: "red" }}>{errors.rasa}</span>}
        <br/>
        <label htmlFor="klasa">Klasa:</label>
        <select
          value={formData.klasa}
          onChange={handleChange}
          name="klasa"
        > 
          <option value="wybierz" disabled>Wybierz klasę</option>
          <option value="wojownik">Wojownik</option>
          <option value="mag">Mag</option>
          <option value="lucznik">Łucznik</option>
        </select>
        {errors.klasa && <span style={{ color: "red" }}>{errors.klasa}</span>}
        <br/>
        <label htmlFor="poziom">Poziom:</label>
        <input type="number" id="poziom"
          value={formData.poziom}
          onChange={handleChange}
          name="poziom"
        />
        {errors.poziom && <span style={{ color: "red" }}>{errors.poziom}</span>}
        <br/>
        <label htmlFor="opis">Opis:</label>
        <textarea id="opis" value={formData.opis} onChange={event => {handleChange(event); setOpisCounter(event.target.value.length)}} name="opis"></textarea>
        <p>{opisCounter}/200</p>
        {errors.opis && <span style={{ color: "red" }}>{errors.opis}</span>}
        <br/>
        <label htmlFor="czyPubliczny">
          <input type="checkbox" id="czyPubliczny" checked={formData.czyPubliczny} onChange={handleChange} name="czyPubliczny" />
          Postać publiczna
        </label>
        
        <br/>
        <button type="submit">Stwórz postać</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {characters.map((character, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <p>Imię: {character.imie}</p>
            <p>Rasa: {character.rasa}</p>
            <p>Klasa: {character.klasa}</p>
            <p>Poziom: {character.poziom}</p>
            <p>Opis: {character.opis}</p>
            <p>Publiczna: {character.czyPubliczny ? "Tak" : "Nie"}</p>
          </div>
        ))}
    </div>
    </>
  )

}

export default App
