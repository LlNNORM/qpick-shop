import { useContext} from 'react';
import { BasketContext } from '../BasketContext';

import HeadphonesList from '../headphones-list/headphones-list';



const Products = () => {

    const {headphones, wirelessHeadphones} = useContext(BasketContext)

    return (
        <div>
            <HeadphonesList headphones={headphones} type = {'Наушники'}/>
            <HeadphonesList headphones={wirelessHeadphones} type = {'Беспроводные наушники'}/>
        </div>
    );
};

export default Products;
