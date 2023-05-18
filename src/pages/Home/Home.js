import Hero from "./Hero/Hero";
import Money from "./Money/Money";
import Products from "./Products/Products";

import {useSelector} from "react-redux";
import receipt from "../../redux/reducers/receipt";
import Total from "../../components/Total/Total";

const Home = () => {
    const {data} = useSelector(store => store.receipt)

    let total = 0
    const totalCount = (data) => {
      data.map((item) => total = total + (item.price * item.count))
    }
    totalCount(data)
    return (
        <main>
            <Hero/>
            <Money/>
            <Products/>
            {data.length ? <Total total={total} data={data}/> : ''}
        </main>
    );
};

export default Home;