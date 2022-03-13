import { BrowserRouter } from 'react-router-dom'

import SidebarProvider from 'layouts/SidebarProvider'
import Header from 'layouts/Header/Header'
import Sidebar from 'layouts/Sidebar/Sidebar'

import 'styles/index.scss'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <SidebarProvider>
        <Header />
        <Sidebar />
        <main className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error obcaecati adipisci
          praesentium minus! Ut, itaque commodi molestias temporibus quo sint voluptate quisquam
          expedita labore deleniti earum repellat architecto, nulla minima rem hic vero obcaecati
          quasi? Nulla, placeat consectetur. Laudantium nihil, ad rem illum quae expedita asperiores
          aliquam quas repudiandae! Totam maiores temporibus laudantium nihil quos pariatur eum
          veritatis, nam sint adipisci mollitia nisi ducimus itaque alias in sit consequuntur
          deleniti molestiae recusandae. Sequi rem ipsum temporibus officia fuga ratione at
          asperiores odio id laborum repellat, porro voluptatum molestiae nulla voluptates, cum
          dicta quod inventore hic reprehenderit nisi! Repudiandae, veniam.
        </main>
      </SidebarProvider>
    </div>
  </BrowserRouter>
)

export default App
