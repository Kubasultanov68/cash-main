import React from 'react';

const Total = ({data, total}) => {
    return (
        <section className="total">
            <div className="container">
                <div className="total__content">
                    <h2 className="total__title">
                        мои продукты
                    </h2>
                    <ul className="total__menu">
                        {data.map((item) => (
                            <li className="total__menu-item" key={item.id}>
                                {item.title} <p>x{item.count}</p> <span>${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <h3 className="total__all">
                        итого:  <span>${total}</span>
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Total;