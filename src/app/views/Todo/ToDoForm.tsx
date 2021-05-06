import React, { useState } from 'react';
import { Form, Input, Col } from 'antd';
import { actions } from './slice';
import { useDispatch } from "react-redux";
import selectState from './selectors';
import TodoList from './components/ToDoList';
import { StyledRow, StyledButton } from './styles';

interface ITodoProps {
  saveTodo: (value: string) => void;
}

const ToDoForm = (props: ITodoProps) => {

  const [value, setValue] = useState<string>('');
  const {
    saveTodo
  } = props;

  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const { data } = selectState();

  const onFinish = () => {
    saveTodo(value);
    let id = Math.random();
    dispatch(actions.postToDo({
      id: id,
      todo: value
    }))
    setValue('');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onDelete = (todoIndex: number | string) => {
    dispatch(actions.deleteTodo(todoIndex));
  }

  return (
    <StyledRow justify="center">
      <Col span={12}>
        <h1>The Simple To Do App</h1>
        <Form
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
              value={value}
            />
          </Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Add
        </StyledButton>
        </Form>
         <TodoList todos={data} deleteTodo={onDelete}/>
      </Col>
    </StyledRow>
  );
};

export default ToDoForm;