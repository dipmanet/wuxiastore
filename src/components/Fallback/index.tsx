import * as React from 'react'
import Loader from '#components/Loader'

export type FallbackType = NonNullable<React.ReactNode> | undefined

export type FallbackContextType = {
    updateFallback: (fallback: FallbackType) => void
}

export const FallbackContext = React.createContext<FallbackContextType>({
    updateFallback() {},
})

type FabllbackProviderProps = Record<string, unknown>

export const FallbackProvider: React.FC<FabllbackProviderProps> = ({
    children,
}) => {
    const [fallback, setFallback] = React.useState<FallbackType | null>(null)

    const updateFallback = React.useCallback((fallback: FallbackType) => {
        setFallback(() => fallback)
    }, [])

    const renderChildren: any = React.useMemo(() => children, [children])

    return (
        <FallbackContext.Provider value={{ updateFallback }}>
            <React.Suspense fallback={<Loader fallback={fallback} />}>
                {renderChildren}
            </React.Suspense>
        </FallbackContext.Provider>
    )
}

export default FallbackProvider
