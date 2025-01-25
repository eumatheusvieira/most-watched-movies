import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import NavBar from "./components/navbar";
import styles from './Home.module.css'
import axios from 'axios'


export default function Home() {
  const [ movies, setMovies ] = useState([]) 

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {
        api_key: '',
        language: 'pt-BR'
      }
    }).then(response => {
      setMovies(response.data.results)
    })
  }

  return (
    <>
      <NavBar />
      <section className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Recomendações</h1>
          <hr/>
        </div>

        <div className={styles.movies}>
            {movies.map((movie) => 
              <div key={movie.id} className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                <div className={styles.details}>
                  <div className={styles.name}>
                    <p className={styles.movieTitle}>
                      {movie.title}
                    </p>
                    {movie.overview ? (
                      <p className={styles.description}>
                        {movie.overview}
                      </p>
                    ) : <p className={styles.description}>Sem descrição</p>}
                  </div>
                  <div className={styles.buttonContainer}>
                    <Link to={`https://www.youtube.com/results?search_query=${movie.title}+trailer` }target="_blank"><button className={styles.btn}>VEJA MAIS</button></Link>
                    
                  </div>
                </div>
              </div>
            )}
        </div>
      </section>
    </>
  )
}

