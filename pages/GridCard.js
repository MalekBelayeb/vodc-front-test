import React from 'react';
import {Card,Col} from 'antd';
import ListCard from '../public/components/ListCard';


const {Meta}= Card;
const GridCard = () => {

    return (
        <div>
            <ListCard></ListCard>
            <ListCard></ListCard>
            <ListCard></ListCard>
        </div>
    )
}
export default GridCard