import { BrowserRouter } from 'react-router-dom'

import SidebarProvider from 'layouts/SidebarProvider'
import BackdropProvider from 'layouts/BackdropProvider'
import Header from 'layouts/Header/Header'
import Sidebar from 'layouts/Sidebar/Sidebar'

import 'styles/index.scss'

function App() {
  return (
    <BackdropProvider>
      <SidebarProvider>
        <BrowserRouter>
          <div className="container">
            <Sidebar />
            <main className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quibusdam quisquam, eveniet architecto ad obcaecati
              deserunt veritatis sunt inventore maiores error, fugiat tempora
              fugit libero ipsam expedita repellendus commodi ipsum omnis
              doloremque. Magni odio ullam blanditiis facilis itaque atque
              architecto earum nisi quisquam, dolore expedita id temporibus
              voluptates eius tempore.
            </main>
            <Header />
          </div>
        </BrowserRouter>
      </SidebarProvider>
    </BackdropProvider>
  )
}

export default App
