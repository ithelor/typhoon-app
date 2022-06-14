import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NoMatch from 'components/NoMatch'
import Header from 'layouts/Header'
import Sidebar from 'layouts/Sidebar'
import SidebarProvider from 'layouts/SidebarProvider'
import About from 'pages/About'
import Legal from 'pages/Legal'
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
          <Route path="legal" element={<Legal />} />
          <Route path="regions" element={<Regions />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
)

export default App
