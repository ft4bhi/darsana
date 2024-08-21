import Link from 'next/link';
import React from 'react';

const NavElement = () => {
    return (
        <div className='hidden sm:block'>
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">


                    <Link className='navbar__link relative' href="#">Home</Link>
                    <Link className='navbar__link relative' href="#">Plants</Link>
                    <Link className='navbar__link relative' href="#">aggrculture</Link>
                    <Link className='navbar__link relative' href="#">House products</Link>
                    <Link className='navbar__link relative' href="#">Contact</Link>

                </div>
            </div>
        </div>
    );
}

export default NavElement;
