function App(){
  return(
    <Filmoteka/>
  )
}
function Filmoteka(){
  const filmy = [
    {title: "grappa ice", year: 2024, img: "./src/assets/grapp.jpg", rating: 10.0},
    {title: "epoka lodowcowa", year:  2005, img: "./src/assets/grapp.jpg", rating: 8.9},
    {title: "chlpaki nie placzo", year: 1980, img: "./src/assets/grapp.jpg", rating: 9.9}
  ]
  const books = [
    {title: "dzieci z bullerbyn", year: 1950, img: "./src/assets/grapp.jpg", strony:300},
    {title: "harry potter 1", year: 1990, img: "./src/assets/grapp.jpg", strony:250},
    {title: "asterix", year: 1980, img: "./src/assets/grapp.jpg", strony:30}
  ]
  const albums = [
    {title: "gargamelvlog nowy album", year:2026, img: "./src/assets/grapp.jpg", zespol: "grgml", gatunek: "slaby rap", songs: [
      {index:1, title:"Prelude", length:"0:52"},
      {index:2, title:"Czemu to nie dzialaaa", length:"0:52"},
      {index:3, title:"Prelude", length:"0:52"},
      {index:4, title:"Prelude", length:"0:52"},
      {index:5, title:"Prelude", length:"0:52"},
      {index:6, title:"Prelude", length:"0:52"}

    ]},
    {title: "gargamelvlog nowy album", year:2026, img: "./src/assets/grapp.jpg", zespol: "grgml", gatunek: "slaby rap", songs: [
      {index:1, title:"Prelude", length:"0:52"},
      {index:2, title:"Prelude", length:"0:52"},
      {index:3, title:"Prelude", length:"0:52"},
      {index:4, title:"Prelude", length:"0:52"},
      {index:5, title:"Prelude", length:"0:52"},
      {index:6, title:"Prelude", length:"0:52"}
    ]},
    {title: "gargamelvlog nowy album", year:2026, img: "./src/assets/grapp.jpg", zespol: "grgml", gatunek: "slaby rap", songs: [
      {index:1, title:"Prelude", length:"0:52"},
      {index:2, title:"fajny utwor", length:"0:54"},
      {index:3, title:"Prelude", length:"0:52"},
      {index:4, title:"Prelude", length:"0:52"},
      {index:5, title:"Prelude", length:"0:52"},
      {index:6, title:"Prelude", length:"0:52"}
    ]}
  ]
  return(
    <>
      <h1>Film</h1>
      <div style={{display: "flex", flexDirection: "row", margin: "24px", gap: "12px",}}>
        {
          filmy.map((film): any =>{
            return(
            <Film title={film.title} year = {film.year} img={film.img} rating={film.rating}/>
          )})
        }
      </div>
      <h1>Ksiazka</h1>
      <div style={{display: "flex", flexDirection: "row", margin: "24px", gap: "12px",}}>
        {
          books.map((book): any =>{
            return(
            <Ksiazka title = {book.title} year ={book.year} img={book.img} strony={book.strony}/>
          )})
        }
      </div>
      <h1>Muzyka</h1>
      <div style={{display: "flex", flexDirection: "row", margin: "24px", gap: "12px",}}>
        {
          albums.map((album): any =>{
            return(
            <Muza title={album.title} year={album.year} img={album.img} zespol={album.zespol} gatunek= {album.gatunek} children={
             album.songs?.map((track): any=>{
              return(
                <Track index={track.index} title={track.title} length={track.length} />
              )
             })
            }>
            </Muza>
          )})
        }
      </div>
    </>
  )
}
interface FilmProps{
  title:string,
  year:number,
  img:string,
  rating:number
}
function Film({title, year, img, rating}: FilmProps){
  return(
  <div style={{display: "flex", flexDirection: "column", maxWidth: "33%"}}>
    <img src={img}></img>
    <p><b>{title}</b><span> | {rating}★</span></p>
    <p>{year}</p>
  </div>
  )
}
interface BookProps{
  title:string,
  year:number,
  img:string,
  strony:number
}
function Ksiazka({title, year, img, strony}: BookProps){
  return(
  <div style={{display: "flex", flexDirection: "column", maxWidth: "33%"}}>
    <img src={img}></img>
    <p><b>{title}</b></p>
    <p>{year}</p>
    <p>{strony}</p>
  </div>
  )}
interface MusicProps{
  title:string,
  year:number,
  img:string,
  zespol:string,
  gatunek:string,
  children:any
}
function Muza({title, year, img, zespol, gatunek, children}:MusicProps){
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
interface TrackProps{
  index: number,
  title: string,
  length: string
}
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