import Header from "./components/Header";
import Link from "./components/Link";

export default function App() {
  return (
    <main className="bg-grey900 font-Inter p-5 flex justify-center items-center min-h-screen">
      <section className="max-w-3xl mx-auto bg-grey800 p-6 rounded-xl">
      <Header/>
      <section className="flex flex-col gap-5 ">
        <Link name="GitHub "/>
        <Link name="Frontend Mentor "/>
        <Link name="LinkedIn "/>
        <Link name="Twitter "/>
        <Link name="Instagram"/>
      </section>
      </section>
    </main>
  )
}