import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Film from "./pages/Film"
import Favorites from "./pages/Favorites"

import Header from "./components/Header"
import PageContent from "./components/PageContent"
import Error from "./pages/Error"

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <PageContent>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Film />} />
                    <Route path="/favorites" element={<Favorites />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </PageContent>
        </BrowserRouter>
    )
}

export default RoutesApp
