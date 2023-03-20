import { useSearchParams } from 'react-router-dom'

const SearchResults = () => {
    const [params] = useSearchParams()

    return (
        <div>
            <h1>SearchResults</h1>

            <h1 className="text-red-500">results for {params?.get('query')}</h1>
        </div>
    )
}

export default SearchResults
