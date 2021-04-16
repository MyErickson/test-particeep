/* eslint-disable react-hooks/exhaustive-deps */
import React , { useEffect , useState } from 'react'

import SelectCategory from './SelectCategory/SelectCategory'
import CardMovie from './CardMovie/CardMovie'

import { Layout, Menu}  from 'antd';
import './Movie.css'

const { Header, Content, Footer } = Layout;

const Movie = (props) => {

  const { callMovie , listMovie } = props

  const [movies ,setMovies] = useState(undefined)


  useEffect(()=>{
      
    function receiveListMovie(){
      callMovie()
      if(listMovie){
        setMovies(listMovie)
      }
    }

    receiveListMovie()
  },[listMovie])


  const handleClickClose  = (id)=>{
      const filterListMovie = movies.filter(movie => movie.id !== id ) 
      setMovies(filterListMovie)
  }


  const handleLikeAndDislike =(id,click)=>{
    const addLikeMovie =  movies.map(value=>{
        if(value.id === id){
                value[click] += 1 
        }
        return value
      })

    setMovies(addLikeMovie)
  }

  const movieByCategory =(category)=>{
    
    if(category.length >0 ){
        const filterListMovie = movies.filter(movie => category.includes(movie.category)) 
        setMovies(filterListMovie)
    }else{
        setMovies(listMovie)
    }
    
  }
  
  return (
    <Layout className="layout" style={{height:"100vh"}}>
      <Header >
        <Menu theme="dark" mode="horizontal" style={{textAlign:'center'}} >
          <SelectCategory 
            movies={movies} 
            movieByCategory={movieByCategory}
            />
        </Menu>
      </Header>

      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <div className="site-laoyout-cointent-cardMovie">
            {movies && movies.map( (value,index) =>
                <CardMovie 
                    key={index} 
                    movie={value} 
                    handleClickClose={handleClickClose}
                    handleLikeAndDislike={handleLikeAndDislike }
                />
              )}
        
          </div>
     
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>@ Particeep</Footer>
    </Layout>
  )
}

export default Movie


