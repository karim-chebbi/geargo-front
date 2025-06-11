import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from "antd";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteCar } from '../JS/actions/carActions';

const DeleteCar = () => {
        const navigate = useNavigate();

        const dispatch = useDispatch()

        const {id} = useParams()

          const [isModalOpen, setIsModalOpen] = useState(false);
          const showModal = () => {
            setIsModalOpen(true);
          };
          const handleOk = () => {
            dispatch(deleteCar(id, navigate))
            setIsModalOpen(false);
          };
          const handleCancel = () => {
            setIsModalOpen(false);
          };

  return (
    <>
      <Button
        danger
        icon={<DeleteOutlined />}
        onClick={showModal}
        type="dashed"
      >
        Delete
      </Button>

      <Modal
        title={
          <span>
            <ExclamationCircleFilled style={{ color: "red", marginRight: 8, fontSize: "1.5rem" }} />
            Are you sure you want to delete this car?
          </span>
        }
        icon={<ExclamationCircleFilled />}
        content="Some descriptions"
        okText="Yes"
        okType="danger"
        cancelText="No"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}

export default DeleteCar