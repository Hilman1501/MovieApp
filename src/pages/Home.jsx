import { useState } from "react";
import Hero from "../components/hero/Hero";
import AddFormMovie from "../components/addformmovie/AddFormMovie";
import Movies from "../components/movie/movies"; 
import data from "../components/utils/constants/data";


function Home (){

//  const [movies, setMovies] = useState(data);
//const [movies]= useState(data); 

  

 return (
    <main>
      <Hero />
     {/* <Movies movies={movies} setMovies={setMovies} />*/}
     <Movies/>
     {/* <AddFormMovie movies={movies} setMovies={setMovies} />*/}
    </main>
  );
};

export default Home;
