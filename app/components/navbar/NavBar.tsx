'use client';
import { Container } from '../'
import { Logo, Search, UserMenu } from './';

const NavBar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between md:gap-0 gap-3'>
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default NavBar
