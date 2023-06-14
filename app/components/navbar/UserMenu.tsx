'use client';

import { useState, useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { If, Then } from 'react-if';

import { Avatar } from '../';
import { MenuItem } from './';

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div onClick={() => { }} className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    Airbnb your home
                </div>
                <div onClick={toggleMenu} className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition rounded-full'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>


            <If condition={isOpen}>
                <Then>
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden text-small right-0 top-12'>
                        <div className='flex flex-col cursor-pointer'>
                            <>
                                <MenuItem label='Login' onClick={() => {}}/>
                                <MenuItem label='Sign Up' onClick={() => {}}/>

                            </>
                        </div>
                    </div>
                </Then>
            </If>

        </div>
    )
}

export default UserMenu
