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
    console.log('Success:', values);
    dispatch(actions.postSignIn(values))
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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
          size='large'
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input 
          size='large'
          onChange={onChange}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <p>User: {signIn.username}</p>
      <p>Email: {signIn.email}</p>
      </>
  );
};

export default ToDoForm;