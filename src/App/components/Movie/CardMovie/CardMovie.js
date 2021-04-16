/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */



import React from 'react'

import { Card } from 'antd';
import { DislikeOutlined , LikeOutlined,CloseCircleOutlined  } from '@ant-design/icons';
import './CardMovie.css'

const { Meta } = Card;

const CardMovie = ({
  movie,
  handleClickClose
}) => {
  
  
  const {image,dislikes,likes,id,title,category} = movie


  return (

      <Card
        className='test'
        style={{ width: '10%', minWidth:150,borderRadius:'15px' ,borderTopRightRadius:'15px',boxShadow:'2px 2px 5px 0.2px rgba(0,0,0,0.2)',margin:10  }}
        bordered ={true}
        cover={
          <img
            style={{borderTopRightRadius:'15px' ,borderTopLeftRadius:'15px'}}
            alt="example"
            src={image}
          />
        }
        actions={[
          <div className="icon-action">
            <DislikeOutlined key ="dislike"/>
            <div style={{marginLeft:10}}>{dislikes}</div>
          </div>
          ,
          <div className="icon-action">
            <LikeOutlined key="like" />
            <div style={{marginLeft:10}}>{likes}</div>
          </div>
          ,
        ]}
      >
        <CloseCircleOutlined className='icon-CloseCircle' onClick={()=>handleClickClose(id)} />
        <Meta
          style={{height:50, fontSize: '12px'}}  
          title={title}
          description={category}
        />
      </Card>
    
      
  )
}

export default CardMovie
