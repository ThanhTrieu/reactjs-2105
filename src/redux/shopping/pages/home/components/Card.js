import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';


const { Meta } = Card;

const CartProduct = ({ data } ) => {
  return (
    <Link to={`/product/${slugify(data.name)}/${data.id}`}>
      <Card
        hoverable
        style={{ width: 240, marginTop: '15px' }}
        cover={<img alt={data.name} src={data.image} />}
      >
        <Meta title={data.name} />
        <p>Price: {data.price}</p>
      </Card>
    </Link>
  )
}
export default React.memo(CartProduct);