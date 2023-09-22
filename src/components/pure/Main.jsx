import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import { Cards } from "./../cards/Cards";

export const Main = () => {
  return (
    <>
      <div className="grid min-h-screen lg:grid-cols-4 xl:grid-cols-6">
        <Sidebar />
        <main className="h-[100vh] overflow-y-scroll bg-gray-100 p-8 lg:col-span-3 xl:col-span-5">
          <Header />
          {/* Section 1 */}
          <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 rounded-xl bg-primary-600 p-8 text-gray-300">
              <RiLineChartLine className="text-5xl" />
              <h4 className="text-2xl">Clientes</h4>
              <span className="text-5xl text-white">0</span>             
            </div>
            {/* Card 2 */}
            <div className="flex flex-col justify-between gap-4 rounded-xl bg-white p-4 drop-shadow-2xl">
              <div className="flex items-center gap-4 rounded-xl bg-primary-100/10 p-4">
                <span className="rounded-xl bg-primary-100 p-4 text-2xl font-bold text-gray-300">
                  98
                </span>
                <div>
                  <h3 className="font-bold">Rank</h3>
                  <p className="text-gray-500">In top 30%</p>
                </div>
              </div>
              <div className="rounded-xl bg-primary-100/10 p-4">
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-xl bg-primary-100 p-4 text-2xl font-bold text-gray-300">
                    32
                  </span>
                  <div>
                    <h3 className="font-bold">Projects</h3>
                    <p className="text-gray-500">8 this month</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="rounded-full bg-primary-100/20 px-4 py-1">
                    Mobile app
                  </span>
                  <span className="rounded-full bg-primary-100/20 px-4 py-1">
                    Branding
                  </span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-1 flex flex-col justify-between md:col-span-2">
              <h1 className="mb-8 text-2xl font-bold">Próximos Proyectos</h1>
              <div className="rounded-xl bg-white p-8 shadow-2xl">
                <div className="mb-8 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">Logo design for Bakery</h3>
                    <p className="text-gray-500">1 day remaining</p>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">Logo design for Bakery</h3>
                    <p className="text-gray-500">1 day remaining</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="transition-colors hover:text-primary-100 hover:underline"
                  >
                    See all projects
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Section 2 */}
          <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="mb-8 text-2xl font-bold">Nuestras Redes</h1>
              <Cards></Cards>
            </div>
            <div>
              <h1 className="mb-8 text-2xl font-bold">Planes de proyecto</h1>
              <div className="mb-8 flex flex-col gap-8 rounded-xl bg-white p-8 shadow-2xl">                          
                <div>
                  <h5 className="text-lg font-bold">
                    Standard Plan
                  </h5>
                  <p className="text-gray-500">
                  Asistente virtual, Puede enviar imágenes y videos, Flujo simple, Soporte
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-primary-300/10 px-4 py-8 md:flex-row">
                  <div>
                    <sup className="text-sm text-gray-500">&#36;</sup>{" "}
                    <span className="mr-2 text-2xl font-bold">30.000</span>
                    <span className="text-sm text-gray-500">/ mes</span>
                  </div>
                  <div>
                    <span className="rounded-full border border-primary-100 px-4 py-2 text-primary-500">
                      Contactános
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold">
                    Pro Plan
                  </h5>
                  <p className="text-gray-500">
                  Incluye todo lo del plan Estándar, Genera imagenes, Sistema de turnos y recordatorios, Integraciones con Api's, Preguntar por más funcionalidades
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-primary-300/10 px-4 py-8 md:flex-row">
                  <div>
                    <sup className="text-sm text-gray-500">&#36;</sup>{" "}
                    <span className="mr-2 text-2xl font-bold">39.000</span>
                    <span className="text-sm text-gray-500">/ mes</span>
                  </div>
                  <div>
                    <span className="rounded-full border border-primary-100 px-4 py-2 text-primary-500">
                      Contactános
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
