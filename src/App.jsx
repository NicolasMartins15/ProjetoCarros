import Sedans from "./components/Sedans"
import Luxuosos from "./components/Luxuosos"
import Suvs from "./components/Suvs"

export default function  App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center itens-center">
      <div className="lg:flex">
        <Sedans/>
        <Suvs/>
        <Luxuosos/>
      </div>
    </main>
  )
}