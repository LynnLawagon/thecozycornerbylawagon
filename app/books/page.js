import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Manga Recommendations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/naruto.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Naruto</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/one piece.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">One Piece</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/bleach.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Bleach</h3>
        </div>
      </div>

      <br></br>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/bc.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Black Clover</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/mha.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">My Hero Academia</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/spyxfam.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Spy x Family</h3>
        </div>
      </div>

      <br></br>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/hunter.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Hunter x Hunter</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/aot.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Attack on Titan</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/wotakoi.png" alt="Book" width={350} height={400} />
          <h3 className="mt-3 font-medium">Wotakoi: Love is Hard for Otaku</h3>
        </div>
      </div>
    </section>
  );
}