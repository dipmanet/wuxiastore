import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '#pages/HomePage'
import { routes } from './constants/routes'
import Header from './components/Header'
import { FallbackProvider } from '#/components/Fallback'

function App() {
    return (
        <div className="flex flex-col relative">
            <Header />
            <FallbackProvider>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.id}>
                            <Route
                                key={route.id}
                                path={route.path}
                                element={<route.load />}
                            />
                            <Route
                                key={route.id}
                                path={`:${route.path}`}
                                element={<route.load />}
                            />

                            {/* <Route path="*" element={<h1>Web page crashed!</h1>} /> */}
                        </Route>
                    ))}
                    <Route key="/" path="/" element={<HomePage />} />
                    <Route path="*" element={<div>Web Page Crashed!</div>} />
                </Routes>
            </FallbackProvider>
        </div>
    )
}

export default App
