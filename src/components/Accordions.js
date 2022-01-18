import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Link from '@stackbit/components/dist/utils/link';
import ArrowLeft from '@stackbit/components/dist/svgs/arrow-left';
import ArrowRight from '@stackbit/components/dist/svgs/arrow-right';
import Cart from '@stackbit/components/dist/svgs/cart';
import Facebook from '@stackbit/components/dist/svgs/facebook';
import GitHub from '@stackbit/components/dist/svgs/github';
import Instagram from '@stackbit/components/dist/svgs/instagram';
import LinkedIn from '@stackbit/components/dist/svgs/linkedin';
import Twitter from '@stackbit/components/dist/svgs/twitter';

const iconMap = {
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    cart: Cart,
    facebook: Facebook,
    github: GitHub,
    instagram: Instagram,
    linkedin: LinkedIn,
    twitter: Twitter
};

export default function Accordions(props) {
    const [openTab, setOpenTab] = React.useState(0);

    return (

        <>

            <div className="flex flex-wrap justify-center">
                <div className="w-3/4">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        {
                            props.accordions.map((tab, index) =>
                                <li key={index} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === index
                                                ? "text-white bg-gray-600"
                                                : "text-black bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(index);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                        data-sb-field-path=".tab"
                                    >
                                        {tab}
                                    </a>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="tab-content tab-space">
                                                {
                                                    props.items.map((item, index) =>
                                                        <div className={openTab === index ? "block" : "hidden"} id="link1">
                                                            <p data-sb-field-path=".item">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    )}
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            )}

                    </ul>

                </div>
            </div>
        </>
    );
}