/** @format */

import React from 'react'

export const routes = [
    {
        id: 1,
        name: 'homepage',
        title: 'HomePage',
        path: '/',
        load: React.lazy(async () => import('#pages/HomePage')),
    },
    {
        id: 2,
        name: 'searchResults',
        title: 'Search Results',
        path: '/search',
        load: React.lazy(async () => import('#pages/SearchResults')),
    },
]
