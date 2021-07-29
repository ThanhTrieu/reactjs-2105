import React from 'react';
import { useDispatch } from 'react-redux';
import LayoutShopping from '../../components/Layout';
import { Row, Col, Image, InputNumber, Button } from 'antd';
import { getDataItemsCart, getTotalMoneyCart } from './reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { changeQtyCart, deleteItemProductCart } from './actions';

const CartComponent = () => {
    const { totalMoney, itemsCart } = useSelector(createStructuredSelector({
        totalMoney: getTotalMoneyCart,
        itemsCart: getDataItemsCart
    }));
    const dispatch = useDispatch();

    const changeItemCart = (id, val) => {
        dispatch(changeQtyCart(id,val));
    }
    const removeItemCartById = (id) => {
        dispatch(deleteItemProductCart(id));
    }

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
                                <h3> {item.name}</h3>
                                <p> Price: <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> </p>
                                <p>Money: <NumberFormat value={parseInt(item.price)*parseInt(item.qty)} displayType={'text'} thousandSeparator={true} /></p>
                                <br/>
                                <InputNumber
                                    min={1}
                                    max={10}
                                    value={item.qty}
                                    onChange={ val => changeItemCart(item.id, val)}
                                />
                                <Button
                                    type="dashed"
                                    onClick={() => removeItemCartById(item.id)}
                                > Xoa </Button>
                            </Col>
                        </Row>
                    ))}
                    <div style={{ clear: 'both' }}></div>
                    <h3 style={{ float: 'right' }}> 
                        Tong tien : <NumberFormat value={totalMoney} displayType={'text'} thousandSeparator={true} />
                    </h3>
                    <div style={{ clear: 'both' }}></div>
                </Col>
            </Row>
        </LayoutShopping>
    )
}
export default React.memo(CartComponent);