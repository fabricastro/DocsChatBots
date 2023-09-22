import { Header } from "../pure/Header"
import { Sidebar } from "../pure/Sidebar";

export const Finanzas =()=>{

    return(
        <>
         <div className="grid min-h-screen lg:grid-cols-4 xl:grid-cols-6">
        <Sidebar />
        <main className="h-[100vh] overflow-y-scroll bg-gray-100 p-8 lg:col-span-3 xl:col-span-5">
          <Header />
          <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            Contenido
          </section>
        </main>
      </div>
        </>
    )
}