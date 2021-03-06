import React, {useState} from 'react'

function Heart() {
    const [click, setClick ] = useState(false);
    const handleclick = () => {
        setClick(!click);
    }
    return (
        <figcaption class="card-figcaption">
            <div class="card-figcaption-body">x
                <div class="product-wishlist">
                    <href class="button button--primary wishlist-button event_buy_now_add_to_wishlist" data-wishlist-button data-product-id="120" data-add-url="/wishlist.php?action&#x3D;add&amp;product_id&#x3D;120">
                        <span class={`icon icon-heart-${click ? "full" : "empty"}`} aria-hidden="true" onClick={handleclick}>
                            <svg id="icon-heart" viewBox="0 0 1024 1024"><path d="M489.993 887.107L177.906 586.021C173.904 582.52 63.873 481.99 63.873 361.958c0-146.54 89.526-234.065 239.069-234.065 87.523 0 169.546 69.019 209.058 108.03 39.512-39.011 121.535-108.03 209.059-108.03 149.542 0 239.068 87.525 239.068 234.065 0 120.033-110.031 220.563-114.533 225.065L534.007 887.107c-6 6-14.003 9-22.007 9-8.003 0-16.007-3-22.007-9z">
                                </path>
                            </svg> 
                        </span>
                        </href>
            </div>
        </div>
        </figcaption>
    ) 
}

export default Heart;
