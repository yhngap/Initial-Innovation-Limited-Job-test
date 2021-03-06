import React from 'react'
import {productdata} from './Data'

function Listcount() {
    return (
        <div class="list-count">共 <span class="count">{productdata.length}</span> 款產品</div>
    );
}

export default Listcount;
