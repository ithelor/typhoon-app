import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from 'layouts/Header'
import Sidebar from 'layouts/Sidebar'
import SidebarProvider from 'layouts/SidebarProvider'
import About from 'pages/About'
import Commissions from 'pages/Commissions'
import Legal from 'pages/Legal'
import NoMatch from 'pages/NoMatch'
import Regions from 'pages/Regions'

import 'styles/index.scss'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <main className="content">
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Navigate to="about" />} />
          <Route path="about" element={<About />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="legal" element={<Legal />} />
          <Route path="regions" element={<Regions />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
)

export default App
