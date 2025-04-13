import Neko from '../components/neko'

export const metadata = {
  title: "Nekoverse",
  description: "Explore Api Test & Design",
};

export default function Home() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 px-10">
      <div>
        <Neko width={180} />
      </div>

      <div className="text-sky-500 text-sm text-center">
        猫 / ねこ
      </div>
    </div>
  );
}
