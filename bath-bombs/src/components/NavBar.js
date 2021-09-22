import React, {useContext} from 'react';
import {Flex, Icon, Image, Text} from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';

const NavBar = () => {
    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
            <Icon fill="white" as={MdMenu} w={30} h={30} />
            <Text>Open Menu</Text>
            <Text>Logo</Text>
            <Text>Cart</Text>
        </Flex>
    )
}

export default NavBar
