import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__avatar">
                        <img src="https://neal.fun/spend/billgates.jpg" alt="" className="hero__img"/>
                    </div>
                    <h2 className="hero__name">
                        Тратить деньги Билла Гейтса
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;