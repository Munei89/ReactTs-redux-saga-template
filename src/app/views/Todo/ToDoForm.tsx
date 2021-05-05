import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { reducer, sliceKey, actions } from './slice';
import { useDispatch } from "react-redux";
import selectState from './selectors';


const ToDoForm = (saveTodo?: any ) => {

  const [value, setValue] = useState<string>('');
  
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const { loading, signIn } = selectState();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const onFinish = (values: any) => {
    saveTodo(value);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = () => {
    const fields = form.getFieldsValue();
    console.log(fields.username);
  }

  return (
    <>
    <Form
      {...layout}
      name="form"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Add To Do"
        name="addTodo"
        rules={[{ required: true, message: 'Please fill in your todo!' }]}
      >
        <Input 
          size='large'
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
      </>
  );
};

export default ToDoForm;