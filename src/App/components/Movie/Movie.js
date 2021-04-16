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


  return (
    <Layout className="layout" style={{height:"100vh"}}>
      <Header >
        <Menu theme="dark" mode="horizontal" style={{textAlign:'center'}} >
          <SelectCategory />
        </Menu>
      </Header>

      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <div className="stie-laoyout-cointent-cardMovie">
            {movies && movies.map( (value,index) =>{
              return <CardMovie key={index} movie={value} />
            }  )}
        
          </div>
     
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>@ Particeep</Footer>
    </Layout>
  )
}

export default Movie


