import { useState } from "react";

function App(){
  return(
    <div className="container">
      <Filmoteka/>
    </div>
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
    {title: "The Dark Side of the Moon", year:2026, img: "./src/assets/grapp.jpg", zespol: "Pink Floyd", gatunek: "Prog rock", songs: [
      {index:1, title:"Prelude", length:"0:52"},
      {index:2, title:"Czemu to nie dzialaaa", length:"0:52"},
      {index:3, title:"Prelude", length:"0:52"},
      {index:4, title:"Prelude", length:"0:52"},
      {index:5, title:"Prelude", length:"0:52"},
      {index:6, title:"Prelude", length:"0:52"},
      {index:7, title:"Prelude", length:"0:52"},
      {index:8, title:"Prelude", length:"0:52"},
      {index:9, title:"Prelude", length:"0:52"}

    ]},
    {title: "Slippery When Wet", year:2026, img: "./src/assets/grapp.jpg", zespol: "Bon Jovi", gatunek: "Hard Rock", songs: [
      {index:1, title:"Prelude", length:"0:52"},
      {index:2, title:"Prelude", length:"0:52"},
      {index:3, title:"Prelude", length:"0:52"},
      {index:4, title:"Prelude", length:"0:52"},
      {index:5, title:"Prelude", length:"0:52"},
      {index:6, title:"Prelude", length:"0:52"},
      {index:7, title:"Prelude", length:"0:52"}
    ]},
    {title: "Black Sabbath", year:2026, img: "./src/assets/grapp.jpg", zespol: "Black Sabbath", gatunek: "Metal", songs: [
      {index:1, title:"Prelude", length:"0:52"},
      {index:2, title:"fajny utwor", length:"0:54"},
      {index:3, title:"Prelude", length:"0:52"},
      {index:4, title:"Prelude", length:"0:52"},
      {index:5, title:"Prelude", length:"0:52"},
      {index:6, title:"Prelude", length:"0:52"}
    ]}
  ]
  let ob: any;
  let len = 0;

  const [filmyOpen, setFilmyOpen] = useState(true);
  const [booksOpen, setBooksOpen] = useState(true);
  const [albumsOpen, setAlbumsOpen] = useState(true);
  const [po2010Open, setPo2010Open] = useState(true);
  const [sortedBooksOpen, setSortedBooksOpen] = useState(true);
  const [bestAlbumOpen, setBestAlbumOpen] = useState(true);
  const [movieSearch, setMovieSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");

  const filteredMovies = filmy.filter((film) =>
    film.title.toLowerCase().includes(movieSearch.toLowerCase())
  );

  let nf = "";

  if (filteredMovies.length === 0) {
    nf = "Nie znaleziono filmów";
  }


  return(
<>

{/* ------------------------------------- FILMY ------------------------------------- */}

<h1 className="display-1" onClick={() => setFilmyOpen(!filmyOpen)} style={{cursor: "pointer", color: "black"}}>
  {filmyOpen ? "▾" : "▸"} Filmy
</h1>

<input type="text" className="form-control"  placeholder="Wpisz tytuł"
  onChange={(e) => {
    setMovieSearch(e.target.value);
    console.log(e.target.value);
  }}
  style={{marginBottom:"10px"}}
  
/>

{filmyOpen && (
      <div className="row">
        {
          filmy
          .filter((film) =>
            film.title.toLowerCase().includes(movieSearch.toLowerCase())
          )
          .sort((a, b) => a.title.localeCompare(b.title, "pl"))
          .map((film): any =>{
            return(
            <Film title={film.title} year = {film.year} img={film.img} rating={film.rating}/>
          )}
          )
        }

        {nf && <p>{nf}</p>}

        </div>
        
)}

{/* ------------------------------------- KSIĄŻKI ------------------------------------- */}

<h1 className="display-1" onClick={() => setBooksOpen(!booksOpen)} style={{cursor: "pointer", color: "black"}}>
  {booksOpen ? "▾" : "▸"} Książki
</h1>

<input type="text" className="form-control" placeholder="Wpisz tytuł"
  onChange={(e) => {
    setBookSearch(e.target.value);
    console.log(e.target.value);
  }}
  style={{marginBottom:"10px"}}
/>

{booksOpen && (
  <div className="row">
    {
      books
        .filter((book) =>
            book.title.toLowerCase().includes(bookSearch.toLowerCase())
          )
        .map((book): any =>{
        return(
        <Ksiazka title = {book.title} year ={book.year} img={book.img} strony={book.strony}/>
      )})
    }
  </div>
)}

{/* -------------------------------------- ALBUMY ------------------------------------- */}

<h1 className="display-1" onClick={() => setAlbumsOpen(!albumsOpen)} style={{cursor: "pointer", color: "black"}}>
  {albumsOpen ? "▾" : "▸"} Albumy
</h1>

<input type="text" className="form-control" placeholder="Wpisz tytuł"
  onChange={(e) => {
    setAlbumSearch(e.target.value);
    console.log(e.target.value);
  }}
  style={{marginBottom:"10px"}}
/>

{albumsOpen && (
      <div className="row">
        {
          albums
            .filter((album) =>
              album.title.toLowerCase().includes(albumSearch.toLowerCase())
            )
            .map((album): any =>{
            return(
            <Muza title={album.title} year={album.year} img={album.img} zespol={album.zespol} gatunek= {album.gatunek} children={
             album.songs?.map((track): any=>{
              return(
                <Track index={track.index} title={track.title} length={track.length} album={album.title} />
              )
             })
            }>
            </Muza>
          )})
        }
      </div>
)}

{/* -------------------------------------- INNE ------------------------------------- */}

      <h1 className="display-1" onClick={() => setPo2010Open(!po2010Open)} style={{cursor: "pointer", color: "black"}}>
        {po2010Open ? "▾" : "▸"} Po 2010
      </h1>
{po2010Open && (
      <div className="row">
        {
          filmy
          .map((film): any =>{
            if(film.year > 2010){
            return(
            <Film title={film.title} year = {film.year} img={film.img} rating={film.rating}/>
          )}})
        }
      </div>
)}
      <h1 className="display-1" onClick={() => setSortedBooksOpen(!sortedBooksOpen)} style={{cursor: "pointer", color: "black"}}>
        {sortedBooksOpen ? "▾" : "▸"} Książki posortowane
      </h1>
{sortedBooksOpen && (
      <div className="row">
        {
          books
          .sort((a, b)=> a.year - b.year)  
          .map((book): any =>{
            return(
            <Ksiazka title = {book.title} year ={book.year} img={book.img} strony={book.strony}/>
          )})
        }
      </div>
)}
      <h1 className="display-1" onClick={() => setBestAlbumOpen(!bestAlbumOpen)} style={{cursor: "pointer", color: "black"}}>
        {bestAlbumOpen ? "▾" : "▸"} Album z największą liczbą tracków
      </h1>
{bestAlbumOpen && (
            <div className="row">
        {
          
          albums.map((album): any =>{
            
            if(album.songs.length>len){
              ob = album;
              len = album.songs.length;
            }
            
            })
          }
          
            <Muza title={ob.title} year={ob.year} img={ob.img} zespol={ob.zespol} gatunek= {ob.gatunek} children={
             ob.songs?.map((track: any): any=>{
              return(
                  <Track index={track.index} title={track.title} length={track.length} album={ob.title} />
              )
             })
            }>
            </Muza>
      </div>
)}
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
  return (
  <div className="col" >
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body"  style={{ cursor: "pointer" }} onClick={() => console.log(`Wybrano film: ${title}`)}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{rating}★</p>
        <button className="btn btn-outline-dark" onClick={(e) => {
          e.stopPropagation();
          console.log(`Pokaż szczegóły dla ${title}`);
        }}>Szczegóły</button>
        <p className="card-text">{year}</p>

        

        {rating >= 8 && (
          <span className="badge bg-primary">Polecany</span>
        )}
      </div>
    </div>
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
   <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Rok wydania: {year}</p>
        <p className="card-text">Liczba stron: {strony}</p>
        {year < 2000 && (<span className="badge bg-primary">Klasyka</span>)}
      </div>
    </div>
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

return (
  <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{zespol}</p>
        <p className="card-text">{gatunek}</p>
        <p className="card-text">{year}</p>

        {children && children.length > 0 ? (
           <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Lp.</th>
                  <th scope="col">Tytuł utworu</th>
                  <th scope="col">Długość</th>
                </tr>
              </thead>

              <tbody>
                {children}
              </tbody>
            </table>
        ) : (<div className="alert alert-warning" role="alert">Brak utworów</div>)}
      </div>
    </div>
  </div>
);}
interface TrackProps{
  index: number,
  title: string,
  length: string,
  album: string
}
function Track(props: TrackProps) {

  function handleSongClick(songTitle: string) {
    return () => {
      console.log(`Wybrano utwór: ${songTitle} z ${props.album}`);
    }
    }

  return (
  
      <tr style={{cursor:"pointer"} } onClick={handleSongClick(props.title)}>
        <td>{props.index}</td>
        <td>{props.title}</td>
        <td>{props.length}</td>
      </tr>
    
    
  );
}
export default App