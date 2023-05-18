import React from 'react';
import {useSelector} from "react-redux";
import store from "../../redux";

const MoneyCount = () => {
    const {total} = useSelector(store => store.receipt)
    return (
        <div className="money__count">
            <p className="money__count-text">
                ${total <= 100000000000 ? 100000000000 - total : 0}
            </p>
        </div>
    );
};

export default MoneyCount;