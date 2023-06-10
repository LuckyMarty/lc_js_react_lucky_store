import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';

export default function Total({
    subtotal,
    shipping,
    total
}) {
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

            <Link>Checkout Now</Link>

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
    }
`;