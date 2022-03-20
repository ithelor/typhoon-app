import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import About from 'pages/About'
import Header from 'layouts/Header/Header'
import Sidebar from 'layouts/Sidebar/Sidebar'
import SidebarProvider from 'layouts/SidebarProvider'
import NotFound from 'components/NoMatch'
import Table from 'components/Table/Table'

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
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="about" />} />
          <Route path="about" element={<About />} />
          <Route path="data" element={<h2>Please specify target data</h2>} />
          <Route path="data/:target" element={<Table />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
)

export default App
