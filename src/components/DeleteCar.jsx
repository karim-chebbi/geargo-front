import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const DeleteCar = () => {
        const navigate = useNavigate();

  return (

      <Button danger onClick={() => navigate(-1)} icon={<DeleteOutlined />}>
        Delete
      </Button>

  );
}

export default DeleteCar