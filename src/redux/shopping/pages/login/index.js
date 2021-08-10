import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row,Form, Input, Button } from 'antd';
import { loginRequest } from './actions';
import { messageErr, loadingLogin, getStatusLogin } from './reselect';
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";

const LoginShopping = () => {
    const historyLogin = useHistory();
    const dispatch = useDispatch();
    const { messErr, loading, status } = useSelector(createStructuredSelector({
        messErr: messageErr,
        loading: loadingLogin,
        status: getStatusLogin
    }));

    useEffect(() => {
        if(status){
            historyLogin.push("/");
        } else {
            historyLogin.push("/login");
        }
    }, [dispatch, status, historyLogin])

    const onFinish = (values) => {
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
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
export default React.memo(LoginShopping);