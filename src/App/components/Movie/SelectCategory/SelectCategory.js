import React,{useEffect ,useState} from 'react'

import { Select } from 'antd';

import './SelectCategory.css'

const { Option } = Select;

const SelectCategory = ({
    movies,
    movieByCategory
}) => {
    const [listCategory,setListCategory] =useState(undefined)


  useEffect(()=>{
    function uniqueCatgory(){
        const listCategory = movies && movies.map(value=>value.category)
        const uniqueCategory = [...new Set(listCategory )]
        
        setListCategory(uniqueCategory)
    }
    uniqueCatgory()
  },[movies])

  const handleChange =(value)=> {
    movieByCategory(value)
  }


  return (
    <Select
      mode="multiple"
      allowClear
      placeholder="Select a category"
      onChange={handleChange}
    >
      {listCategory && listCategory.map((value,index)=>
           <Option key={value}>{value}</Option>
      )}
    </Select>
  )
}

export default SelectCategory
