import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Filme from "./pages/Filme"

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
                    <Route path="/filme/:id" element={<Filme />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </PageContent>
        </BrowserRouter>
    )
}

export default RoutesApp
