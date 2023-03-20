import React from 'react'
const HomePage = React.lazy(async () => import('#pages/HomePage'))
const SearchResultsPage = React.lazy(async () => import('#pages/SearchResults'))

export const routes = [
    {
        id: 1,
        name: 'homepage',
        title: 'HomePage',
        path: '/',
        load: HomePage,
    },
    {
        id: 2,
        name: 'searchResults',
        title: 'Search Results',
        path: '/search/',
        load: SearchResultsPage,
    },
]
