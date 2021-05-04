import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


const ToDoForm = (saveTodo?: any ) => {
  const [value, setValue] = useState<string>('');

  const [form] = Form.useForm();
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = () => {
    const fields = form.getFieldsValue();


    console.log(fields.username);
  }

  return (
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
      </Form>
  );
};

export default ToDoForm;