import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row,Form, Input, Button } from 'antd';
import { loginRequest } from './actions';
import { messageErr } from './reselect';
import { createStructuredSelector } from 'reselect';

const LoginShopping = () => {
    const dispatch = useDispatch();
    const { messErr } = useSelector(createStructuredSelector({
        messErr: messageErr
    }));

    const onFinish = (values) => {
        //console.log('Success:', values);
        dispatch(loginRequest(values.username, values.password));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={8} offset={8}>
                
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                { messErr!==null && <p style={{color: 'red',textAlign: 'center' }}> {messErr} </p> }

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
export default React.memo(LoginShopping);