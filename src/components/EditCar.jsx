import { EditOutlined } from '@ant-design/icons';
import {
  Button,
  Modal,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Switch,
  Upload,
} from "antd";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { editCar } from '../JS/actions/carActions';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const EditCar = ({car}) => {


      const [updatedCar, setUpdatedCar] = useState(car);

      const [isModalOpen, setIsModalOpen] = useState(false);

      const {id} = useParams()

      const dispatch = useDispatch();

        useEffect(() => {
          if (car) {
            setUpdatedCar(car);
          }
        }, [car]);

                const showModal = () => {
                  setIsModalOpen(true);
                };
                const handleCancel = () => {
                  setIsModalOpen(false);
                };


                     const handleInputChange = (eOrName, value) => {
                       if (typeof eOrName === "object" && eOrName?.target) {
                         // For standard inputs (Input, Select)
                         const { name, value } = eOrName.target;
                         setUpdatedCar((prev) => ({ ...prev, [name]: value }));
                       } else {
                         // For custom components (DatePicker, ColorPicker, InputNumber, etc.)
                         const name = eOrName;
                         setUpdatedCar((prev) => ({ ...prev, [name]: value }));
                       }
                     };

                     const handleEditCar = (e) => {
                       e.preventDefault();
                       dispatch(editCar(id, updatedCar));
                       setIsModalOpen(false);
                     };


            console.log(updatedCar)
  return (
    <>
      <Button
        color="default"
        variant="solid"
        onClick={showModal}
        icon={<EditOutlined />}
      >
        Edit car
      </Button>
      <Modal
        title="Adding new car"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleEditCar}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ minWidth: 600 }}
        >
          {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item> */}

          <Form.Item label="Make">
            <Input
              value={updatedCar.make}
              name="make"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Model">
            <Input
              value={updatedCar.model}
              name="model"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Fuel">
            <Radio.Group
              value={updatedCar.fuel}
              name="fuel"
              onChange={handleInputChange}
            >
              <Radio value="Petrol"> Petrol </Radio>
              <Radio value="Diesel"> Diesel </Radio>
              <Radio value="Electric"> Electric </Radio>
              <Radio value="Hybrid"> Hybrid </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Image">
            <Input
              value={updatedCar.image}
              name="image"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="year">
            <DatePicker
              
              picker="year"
              name="year"
              onChange={(date, dateString) =>
                handleInputChange("year", dateString)
              }
            />
          </Form.Item>

          <Form.Item label="price">
            <InputNumber
              value={updatedCar.price}
              onChange={(value) => handleInputChange("price", value)}
            />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  color: "inherit",
                  cursor: "inherit",
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>

          <Form.Item label="color">
            <ColorPicker
              value={updatedCar.color}
              picker="color"
              onChange={(color, hex) => handleInputChange("color", hex)}
            />
          </Form.Item>
          <Form.Item label="Rate">
            <Rate />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditCar