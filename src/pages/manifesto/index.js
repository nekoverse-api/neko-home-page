import Neko from '../../components/neko'

export const metadata = {
  title: "Nekoverse - Manifesto",
  description: "Explore Api Test & Design",
};

export default function Manifesto() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 px-10">
      <div>
        <Neko width={180} />
      </div>

      <div className="text-sky-700 px-4 text-3xl font-bold text-center">
        It&apos;s time for a revolution in API client technology!
      </div>

      <div className="max-w-4xl text-sky-600 py-2 px-4 text-gl text-center">
        Neko is a Faster, Git-Friendly, Flexible, Extensible and Highly Plugineable API client, aimed at revolutionizing the status quo represented by Postman, Insomnia, Bruno and similar tools out there.
      </div>
    </div>
  );
}
