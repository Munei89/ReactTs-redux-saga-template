import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './slice';
import { StyledRow, StyledButton } from './styles';
import selectState from './selectors';
import { Typography, Form, Input, Button, Row, Col, Alert } from 'antd';
import { IUserSignUp } from './types';

const { Title } = Typography;

const Signup = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
       user,
       isError,
       isFetching,
       isSuccess, 
    } = selectState();

    const onFinish = (values: IUserSignUp) => {
        dispatch(actions.signUpUser(values));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <StyledRow justify="center">
                <Col span={24}>
                <Title>Sign Up</Title>
                </Col>
                <Col span={8}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col span={8}>
                            <StyledButton type="primary" htmlType="submit">
                                Sign Up
                            </StyledButton>
                            </Col>
                        </Row>
                    </Form>
                    {isSuccess && <Alert type="success" message="Successs" />}
                </Col>
            </StyledRow>
        </>
    )
}


export default Signup;