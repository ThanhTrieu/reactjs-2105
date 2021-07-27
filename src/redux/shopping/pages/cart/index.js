import React from 'react';
import LayoutShopping from '../../components/Layout';
import { Row, Col, Image, InputNumber, Button } from 'antd';
import { getDataItemsCart, getTotalMoneyCart } from './reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const CartComponent = () => {
    const { totalMoney, itemsCart } = useSelector(createStructuredSelector({
        totalMoney: getTotalMoneyCart,
        itemsCart: getDataItemsCart
    }));

    if(itemsCart.length === 0 || itemsCart === undefined){
        return (
            <LayoutShopping
                sub_1="Product"
                sub_2="cart"
                sub_3="view"
            >
                <Row>
                    <Col span={24}>
                        <h1> Chua co san pham nao trong gio hang</h1>
                    </Col>
                </Row>
            </LayoutShopping>
        )
    }

    return (
        <LayoutShopping
            sub_1="Product"
            sub_2="cart"
            sub_3="view"
        >
            <Row>
                <Col span={24}>
                    <h1> Thong tin gio hang</h1>

                    {itemsCart.map((item,index) => (
                        <Row key={index} style={{ margin: '15px 0px', border: '1px solid #ccc', padding: '10px'}}>
                            <Col span={4}>
                                <Image src={item.image} />
                            </Col>
                            <Col span={20}>
                                <h4> {item.name}</h4>
                                <p> Price: {item.price}</p>
                                <br/>
                                <InputNumber min={1} max={10} defaultValue={item.qty} />
                                <Button type="dashed"> Xoa </Button>
                            </Col>
                        </Row>
                    ))}
                    <div style={{ clear: 'both' }}></div>
                    <h3 style={{ float: 'right' }}> Tong tien : {totalMoney}</h3>
                    <div style={{ clear: 'both' }}></div>
                </Col>
            </Row>
        </LayoutShopping>
    )
}
export default React.memo(CartComponent);