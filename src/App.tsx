function App(){
  return(
    <Filmoteka/>
  )
}
function Filmoteka(){
  return(
    <>
      <h1>Film</h1>
      <div style={{display: "flex", flexDirection: "row", margin: "24px", gap: "12px",}}>
        <Film title="grappa ice" year = {2024} img="./src/assets/grapp.jpg"/>
        <Film title="grappa ice" year = {2024} img="./src/assets/grapp.jpg"/>
        <Film title="grappa ice" year = {2024} img="./src/assets/grapp.jpg"/>
      </div>
      <h1>Ksiazka</h1>
      <div style={{display: "flex", flexDirection: "row", margin: "24px", gap: "12px",}}>
        <Ksiazka title ="Fajna ksiazka" year = {2009} img="./src/assets/grapp.jpg" strony={300}/>
        <Ksiazka title ="Fajna ksiazka" year = {2009} img="./src/assets/grapp.jpg" strony={300}/>
        <Ksiazka title ="Fajna ksiazka" year = {2009} img="./src/assets/grapp.jpg" strony={300}/>
      </div>
      <h1>Muzyka</h1>
      <div style={{display: "flex", flexDirection: "row", margin: "24px", gap: "12px",}}>
        <Muza title="gargamelvlog nowy album" year={2026} img="./src/assets/grapp.jpg" zespol="grgml" gatunek= "slaby rap">
          <Track index={1} title="Prelude" length="0:52" />
          <Track index={2} title="Slam" length="5:44" />
          <Track index={3} title="Plasticworld" length="6:21" />
          <Track index={4} title="Fasten Your Seatbelt" length="6:38" />
          <Track index={5} title="Through the Loop" length="6:13" />
          <Track index={6} title="Sounds of Life" length="5:21" />
          <Track index={7} title="Girl in the Fire" length="4:53" />
          <Track index={8} title="Tarantula" length="5:31" />
          <Track index={9} title="Out Here" length="6:07" />
          <Track index={10} title="Hold Your Colour" length="5:28" />
          <Track index={11} title="The Terminal" length="5:42" />
          <Track index={12} title="Streamline" length="5:23" />
          <Track index={13} title="Another Planet" length="7:38" />
          <Track index={14} title="Still Grey" length="7:51" />
        </Muza>
        <Muza title="gargamelvlog nowszy album" year={2025} img="./src/assets/grapp.jpg" zespol="grgml" gatunek= "slabszy rap">
          <Track index={1} length="4:47" title="Slayed" />
          <Track index={2} title="Stompbox" length="3:53" />
          <Track index={3} title="Supermoves" length="4:47" />
          <Track index={4} title="Velocity Shift" length="2:08" />
          <Track index={5} title="Horndog" length="3:31" />
          <Track index={6} title="Meteorology" length="5:32" />
          <Track index={7} title="Aquaplane" length="5:14" />
          <Track index={8} title="Doomsday" length="3:14" />
          <Track index={9} title="Basstrap" length="4:03" />
          <Track index={10} title="Sparks" length="6:02" />
          <Track index={11} title="Never" length="6:36" />
          <Track index={12} title="Heligoland" length="26:56" />
        </Muza>
        <Muza title="gargamelvlog jeszcze nowszy album" year={2024} img="./src/assets/grapp.jpg" zespol="grgml" gatunek= "jeszcze slabszy rap">
          <Track index={1} length="4:47" title="Slayed" />
          <Track index={2} title="Stompbox" length="3:53" />
          <Track index={3} title="Supermoves" length="4:47" />
          <Track index={4} title="Velocity Shift" length="2:08" />
          <Track index={5} title="Horndog" length="3:31" />
          <Track index={6} title="Meteorology" length="5:32" />
          <Track index={7} title="Aquaplane" length="5:14" />
          <Track index={8} title="Doomsday" length="3:14" />
          <Track index={9} title="Basstrap" length="4:03" />
          <Track index={10} title="Sparks" length="6:02" />
          <Track index={11} title="Never" length="6:36" />
          <Track index={12} title="Heligoland" length="26:56" />
        </Muza>
      </div>
    </>
  )
}
function Film({title, year, img}){
  return(
  <div style={{display: "flex", flexDirection: "column", maxWidth: "33%"}}>
    <img src={img}></img>
    <p><b>{title}</b></p>
    <p>{year}</p>
  </div>
  )
}
function Ksiazka({title, year, img, strony}){
  return(
  <div style={{display: "flex", flexDirection: "column", maxWidth: "33%"}}>
    <img src={img}></img>
    <p><b>{title}</b></p>
    <p>{year}</p>
    <p>{strony}</p>
  </div>
  )}

function Muza({title, year, img, zespol, gatunek, children}){
return(
<div style={{display: "flex", flexDirection: "column", maxWidth: "33%"}}>
  <img src={img}></img>
  <p><b>{title}</b></p>
  <p>{zespol}</p>
  <p>{gatunek}</p>
  <p>{year}</p>
  {children}
</div>
)}
function Track(props: TrackProps) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td>{props.length}</td>
    </tr>
  );
}
export default App