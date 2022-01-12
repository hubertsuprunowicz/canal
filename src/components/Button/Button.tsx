import { styled } from '@stitches/react';

const Button = styled('button', {
    width: '200px',
    height: '50px',
    borderRadius: "$1",
    border: "none",
    cursor: "pointer",
    backgroundColor: "$primary400",
    '&:hover': {
        backgroundColor: "$primary700",
    },
    '&:disabled': {
        backgroundColor: "$primary200",
        cursor: "not-allowed"
    },
    variants: {
        colorSchema: {
            primary: {
    
            },
            gray: {
    
            }
        },
        outlined: {
            true: {

            },
            false: {

            }
        }
    },
    compoundVariants: [
        {
            colorSchema: 'primary',
            outlined: false,
            css: {
                color: 'white',
                backgroundColor: '$primary400',
                '&:hover': {
                },
            },
        },
        {
            colorSchema: 'primary',
            outlined: true,
            css: {
                color: '$primary400',
                backgroundColor: 'white',
                border: "2px solid $background400",
                '&:hover': {
                },
            },
        },
      ],
      defaultVariants: {
          colorSchema: "primary",
          outlined: false,
      }
});

export default Button