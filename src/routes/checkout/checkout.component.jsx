import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../component/checkoutItem/checkoutitem.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.style';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}
            <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
    )
};

export default Checkout;