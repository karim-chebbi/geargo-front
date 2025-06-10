import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const EditCar = () => {
    const navigate = useNavigate()
  return (

      <Button
        color="default"
        variant="solid"
        onClick={() => navigate(-1)}
        icon={<EditOutlined />}
      >
        Edit
      </Button>

  );
}

export default EditCar