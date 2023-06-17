import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
import UserContext from '../../../context/UserContext';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';
import SiteContext from '../../../context/SiteContext';
import { add } from '../../../api/order';

export default function Total({
    subtotal,
    shipping,
    total
}) {
    // States
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    const navigate = useNavigate();


    // Handler
    const handleBuy = () => {
        const newData = {
            id_user: getLocalStorage("user_id"),
            products: JSON.stringify(site.cart),
            total,
            payment: "CB",
            date: new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(new Date())
        }

        add(user.logged, newData)
            .then(res => {
                if (res !== 1) {
                    alert("Something went wrong...");
                } else if (res === 1) {
                    site.setCart();
                    setLocalStorage("inCart", "");
                    navigate("/confirmation");        
                }
            });

        site.setReload(Math.random());
    }


    // Render
    return (
        <TotalStyled>

            <div className="table">
                {
                    subtotal && (
                        <div>
                            <div>Subtotal</div>
                            <div>{subtotal} €</div>
                        </div>
                    )
                }

                {
                    shipping && (
                        <div>
                            <div>Shipping</div>
                            <div>{shipping} €</div>
                        </div>
                    )
                }

                {
                    total && (
                        <div>
                            <div>Total</div>
                            <div>{total} €</div>
                        </div>
                    )
                }
            </div>

            {
                user.logged ? (
                    <a onClick={() => handleBuy()}>Checkout Now</a>
                ) : (
                    <Link to={"/sign-in"} >Login</Link>
                )
            }

        </TotalStyled>
    )
}


const TotalStyled = styled.div`
    position: sticky;
    top: 100px;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 8px;
    padding: ${theme.spacing.md};

    .table {
      
      > div {
        display: grid;
        grid-template-columns: 50% 50%;
        margin-bottom: ${theme.spacing.md};

        > div:last-child {
          text-align: right;
        }

        &:last-child {
          padding-top: ${theme.spacing.md};
          margin-bottom: 0;
          border-top: 1px solid ${theme.colors.greyLight};

          > div {
            font-size: ${theme.fonts.P2};
          }
        }
      }       
    }
    a {
      display: block;
      border-radius: 8px;
      margin-top: ${theme.spacing.md};
      padding: ${theme.spacing.sm};
      background-color: ${theme.colors.dark};
      color: ${theme.colors.background_white};
      text-decoration: none;
      text-align: center;
      cursor: pointer;
    }
`;