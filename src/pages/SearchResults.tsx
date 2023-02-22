import { useLocation, useSearchParams } from 'react-router-dom'

const SearchResults = () => {
    const searchParams = useLocation().search
    const [query] = useSearchParams(searchParams)
    console.log('test query', query.toString())

    return (
        <div>
            <div>SearchResults</div>

            <h1 className="text-red-500">results for {query}</h1>
        </div>
    )
}

export default SearchResults
