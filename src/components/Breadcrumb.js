import React from 'react'

function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb">
            <ol class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
                <li class="breadcrumb " itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <a class="breadcrumb-label" itemprop="item" href="https://olay.com.hk/" >
                        <span itemprop="name">
                                OLAY
                        </span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="breadcrumb is-active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <a class="breadcrumb-label" itemprop="item" href="https://olay.com.hk/bestseller" aria-current="page">
                        <span itemprop="name">
                                暢銷產品
                                                            </span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </nav>
    );
}

export default Breadcrumb;
