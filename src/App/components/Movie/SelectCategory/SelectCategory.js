import React from 'react'

import { Select } from 'antd';

import './SelectCategory.css'

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);

}

const SelectCategory = () => {



  const handleChange =(value)=> {
    console.log(`selected ${value}`);
  }
    

  return (
    <Select
      mode="multiple"
      allowClear
      placeholder="Select a category"
      onChange={handleChange}
    >
      {children}
    </Select>
  )
}

export default SelectCategory
