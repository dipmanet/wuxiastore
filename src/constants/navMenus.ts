/** @format */

import React from 'react'

interface typeNavMenu {
    id: number
    name: string
    link: string | null
    isExternal: boolean
    parent: number | null
    children: typeNavMenu[]
}

export const navMenus: typeNavMenu[] = [
    {
        id: 1,
        name: 'Home',
        link: null,
        isExternal: false,
        parent: null,
        children: [
            {
                id: 111,
                name: 'Menu1',
                link: null,
                isExternal: false,
                parent: 1,
                children: [
                    {
                        id: 2223,
                        name: 'Sub Menu1',
                        link: '/sub-menu',
                        isExternal: false,
                        parent: 111,
                        children: [],
                    },
                    {
                        id: 2224,
                        name: 'Sub Menu2',
                        link: '/sub-menu',
                        isExternal: false,
                        parent: 111,
                        children: [],
                    },
                ],
            },
            {
                id: 112,
                name: 'Menu2',
                link: '/menu2',
                isExternal: false,
                parent: 1,
                children: [],
            },
            {
                id: 113,
                name: 'Menu3',
                link: null,
                isExternal: false,
                parent: 1,
                children: [
                    {
                        id: 2222,
                        name: 'Sub Menu1',
                        link: '/sub-menu',
                        isExternal: false,
                        parent: 113,
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Categories',
        link: '/categories',
        isExternal: false,
        parent: null,
        children: [
            {
                id: 221,
                name: 'Menu4',
                link: '/menu4',
                isExternal: false,
                parent: 2,
                children: [
                    {
                        id: 2223,
                        name: 'Sub Menu1',
                        link: '/sub-menu',
                        isExternal: false,
                        parent: 221,
                        children: [],
                    },
                ],
            },
        ],
    },
]
