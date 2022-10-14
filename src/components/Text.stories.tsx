import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
    title: 'Componnets/Text',
    component: Text,
    args: {
       children: 'Hugo',
       size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    }
}

export const CustomComponents: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>tag P</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}