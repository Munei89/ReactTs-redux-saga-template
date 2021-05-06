import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectState from './selectors';
import { actions } from './slice';
import { StyledRow } from './styles';
import { Typography, Form, Input, Button, Row, Col } from 'antd';
import { IUserSignUp } from './types';

const { Title, Paragraph, Text, Link } = Typography;

const Signup = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

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
                            <Button type="primary" htmlType="submit">
                                Sign Up
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </StyledRow>
        </>
    )
}


export default Signup;