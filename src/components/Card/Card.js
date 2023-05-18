import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, deleteProduct} from "../../redux/reducers/receipt";

const Card = ({item}) => {

    const {data} = useSelector((store) => store.receipt)
    const dispatch = useDispatch()

    return (
        <div className="products__card">
            <img src={item.img[0]} alt="" className="products__card-img"/>
            <h3 className="products__card-title">{item.title}</h3>
            <p className="products__card-price">{item.price} $</p>
            <div className="products__card-bottom">
                <button className="btn products__card-sale"
                    onClick={() => dispatch(deleteProduct(item))}
                >
                    Продавать
                </button>
                <input readOnly type="number" className="products__card-input"
                       placeholder={data.some((el) => el.id === item.id) ? data.find(el => el.id === item.id).count : 0}
                />
                <button
                    className="btn products__card-buy"
                    onClick={() => {
                        dispatch(addProduct(item))
                    }}
                >
                    Купить
                </button>
            </div>
        </div>
    );
};

export default Card;