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
          <Header />
          <div className="container">
            <Sidebar />
            <main className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quibusdam quisquam, eveniet architecto ad obcaecati
              deserunt veritatis sunt inventore maiores error, fugiat tempora
              fugit libero ipsam expedita repellendus commodi ipsum omnis
              doloremque. Magni odio ullam blanditiis facilis itaque atque
              architecto earum nisi quisquam, dolore expedita id temporibus
              voluptates eius tempore. Possimus laborum totam harum? Error sit,
              blanditiis officia accusantium quasi sapiente autem tempore animi,
              sunt, harum quaerat iste modi. Minus similique assumenda beatae
              eveniet omnis culpa molestias illum a ipsa rerum error
              voluptatibus unde enim, delectus deserunt fugit animi inventore
              reiciendis cum corporis rem repellat! Voluptatum possimus tempora
              autem voluptatem perferendis nisi nulla quibusdam sit adipisci
              minus provident temporibus harum nihil, quidem consequatur, nam
              cupiditate. Saepe inventore architecto libero? Inventore dolor
              neque voluptatum, velit esse maxime corrupti, asperiores possimus
              iusto similique quaerat? Veritatis minus numquam aliquid sapiente
              corporis quaerat quis deleniti molestiae omnis porro illo
              assumenda dolores, id voluptatum in ducimus beatae, dignissimos
              consequatur reprehenderit enim sunt non culpa. Dolor quam fugiat
              laboriosam in nihil blanditiis numquam mollitia hic rem labore nam
              amet ea fugit a, ut deserunt, inventore quod beatae enim quasi.
              Architecto, deleniti sunt molestiae voluptatem fuga sequi
              inventore odit unde repellat officia esse? Quos neque eos, ex
              nulla consequuntur aspernatur recusandae praesentium quae iste
              laudantium! Tempora at repellat veritatis recusandae veniam quod
              sit porro, eos, nobis commodi accusamus eaque praesentium quia
              officia, natus optio ipsam odit exercitationem! Vel doloremque
              quia sint vitae. Reprehenderit quas ab voluptas in nostrum
              necessitatibus voluptates quisquam dolorum doloremque. Ab
              similique numquam eaque, cum laboriosam et voluptas dolor omnis
              vero modi! Excepturi voluptates enim inventore vero rerum, atque,
              dolorem explicabo provident ipsa impedit natus officia asperiores
              adipisci sit animi tenetur incidunt nemo dolorum illum earum
              molestiae voluptatibus temporibus quas! Officia id, aspernatur ab
              ullam saepe tempora eum amet corporis numquam enim provident
              consectetur voluptatibus dolorem molestiae magnam minus odio
              delectus recusandae blanditiis sapiente beatae! Numquam, harum
              consequatur libero iure perspiciatis ratione similique dolore.
              Unde reprehenderit dolores eius repudiandae consequuntur voluptas?
              Odio veniam pariatur expedita blanditiis similique natus nam quia,
              sit temporibus ea esse, quos rerum! Eveniet velit, sapiente
              provident accusantium, tempora aperiam inventore, fuga vitae
              commodi excepturi fugiat ab beatae iure sed consequuntur. Sint
              quas placeat animi ipsa omnis atque itaque dolores necessitatibus
              maiores libero fuga praesentium adipisci deserunt, nesciunt in,
              asperiores quidem quod recusandae nulla! Assumenda natus nobis
              error minima perspiciatis quisquam molestias magnam harum ab
              voluptatum sunt debitis tenetur amet ipsum, dolor non quia
              voluptatem. Id vel fuga, mollitia dolore reprehenderit facere,
              illo in, ducimus voluptatibus minus suscipit a? Nihil voluptatum
              sed aliquam expedita dicta ipsum assumenda dolores totam,
              laudantium id natus veniam ipsa neque veritatis pariatur
              perspiciatis eos nostrum esse. Repellat fugiat, nobis dolore
              impedit adipisci consectetur beatae necessitatibus dolores sit
              veniam unde aspernatur dignissimos officiis tenetur cupiditate
              dolorum aliquid ducimus eaque officia. Atque, molestias! Tempore,
              repellendus, dolores quos tenetur, optio quis culpa illum autem
              eaque veritatis ea fuga atque impedit alias laudantium adipisci.
              Eligendi, mollitia ipsum eaque commodi doloribus praesentium,
              dolore excepturi facere repellat ducimus laborum accusamus,
              molestias explicabo?
            </main>
          </div>
        </BrowserRouter>
      </SidebarProvider>
    </BackdropProvider>
  )
}

export default App
