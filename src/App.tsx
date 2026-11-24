import { useState } from "react";

function App(){
  return(
  <CharakterForm/>
  )
}




function CharakterForm(){
  const [imie, setUserName] = useState("")
  const [rasa, setRasa] = useState("wybierz")
  const [klasa, setKlasa] = useState("wybierz")
  const [poziom, setPoziom] = useState(1)
  const [opis, setOpis] = useState("")
  const [czyPubliczny, setCzyPubliczny] = useState(true)
  const [showCharacterCard, setShowCharacterCard] = useState(false);
  const [opisCounter, setOpisCounter] = useState(0);

const formData = {
  imie,
  rasa,
  klasa,
  poziom,
  opis,
  czyPubliczny
};
  const [errors, setErrors] = useState<any>({})




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
    setShowCharacterCard(true);
  }
}

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imie">Imię postaci:</label>
        <input 
          type="text" 
          value={imie}
          onChange={(event) => setUserName(event.target.value)}/>
          {errors.imie && <span style={{ color: "red" }}>{errors.imie}</span>}
        <br/>
        <label htmlFor="rasa">Rasa:</label>
        <select 
          value={rasa}
          onChange={(event) => setRasa(event.target.value)}
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
          value={klasa}
          onChange={(event) => setKlasa(event.target.value)}>
          <option value="wybierz" disabled>Wybierz klasę</option>
          <option value="wojownik">Wojownik</option>
          <option value="mag">Mag</option>
          <option value="lucznik">Łucznik</option>
        </select>
        {errors.klasa && <span style={{ color: "red" }}>{errors.klasa}</span>}
        <br/>
        <label htmlFor="poziom">Poziom:</label>
        <input type="number" id="poziom"
          value={poziom}
          onChange={(event) => setPoziom(parseInt(event.target.value) || 1)}/>
        {errors.poziom && <span style={{ color: "red" }}>{errors.poziom}</span>}
        <br/>
        <label htmlFor="opis">Opis:</label>
        <textarea id="opis" value={opis} onChange={(event) => {setOpis(event.target.value)
          setOpisCounter(event.target.value.length)
        }}></textarea>
        <p>{opisCounter}/200</p>
        {errors.opis && <span style={{ color: "red" }}>{errors.opis}</span>}
        <br/>
        <label htmlFor="czyPubliczny">
          <input type="checkbox" id="czyPubliczny" checked={czyPubliczny} onChange={(event) => setCzyPubliczny(event.target.checked)} />
          Postać publiczna
        </label>
        
        <br/>
        <button type="submit">Stwórz postać</button>
      </form>
      {showCharacterCard && (
        <div className="card" style={{ width: "18rem", margin: "auto" }}>
          <div className="card-body">
            <p className="card-header">Postać fikcyjna:</p>
            <p className="card-title">Imię: {imie}</p>
            <p className="card-text">Rasa: {rasa}</p>
            <p className="card-text">Klasa: {klasa}</p>
            <p className="card-text">Poziom: {poziom}</p>
            <p className="card-text">Opis: {opis}</p>
            <p className="card-warning">{czyPubliczny ? "Publiczna" : "Prywatna"}</p>
          </div>
        </div>)}
    </>
  )

}

export default App
