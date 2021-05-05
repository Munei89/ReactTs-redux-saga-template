import React from 'react';
import { List, Typography, Divider, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodo } from '../../types';

interface ITodoProps {
    todos: ITodo[],
    deleteTodo: (index: number | string) => void;
}


const TodoList = (props: ITodoProps) => {
  const  {
    todos,
    deleteTodo
  } = props;
  return (
    <>
    {todos && todos.length > 0 &&
        <List
            size="large"
            bordered
            dataSource={todos}
            renderItem={(item, i) => 
                <List.Item>
                    <>
                    {item.todo}
                    <DeleteOutlined  onClick={() => deleteTodo(i)}/>
                    </>
                </List.Item>
            }
        />
    }
  </>
  )
};

export default TodoList;