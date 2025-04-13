import Neko from '../../components/neko'

export const metadata = {
  title: "Nekoverse - About",
  description: "Explore Api Test & Design",
};

export default function About() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 px-10">
      <div>
        <Neko width={180} />
      </div>

      <div className="text-sky-700 text-6xl font-bold text-center">
        neko
      </div>

      <div className="text-sky-500 text-sm text-center">
        猫 / ねこ
      </div>
    </div>
  )
}
