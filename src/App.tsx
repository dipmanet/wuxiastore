import { Route, Routes } from 'react-router-dom'
import './App.css'
import Modal from './components/smallmodel'
import HomePage from '#pages/HomePage'
import { routes } from './constants/routes'
import Header from './components/Header'

function App() {
    return (
        <div className="flex flex-col">
            <Header />
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
                        
                        <Route path="*" element={<h1>Web page crashed!</h1>} />
                    </Route>
                ))}
                <Route key="/" path="/" element={<HomePage />} />
                <Route path="*" element={<div>Web Page Crashed!</div>} />
            </Routes>
        </div>
    )
}

export default App
