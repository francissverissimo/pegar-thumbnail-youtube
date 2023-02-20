import { FormEvent, useState } from "react";

export function App() {
  const [videoId, setVideoId] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const inputValue = event.currentTarget.querySelector("input")?.value;

    if (inputValue && inputValue.includes("youtube.com/"))
      setVideoId(inputValue.split("=")[1]);
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <header className="bg-gradient-to-tr from-orange-800 via-amber-700 to-yellow-600">
          <h1 className="text-stone-100 font-medium text-xl md:text-3xl text-center p-2 md:py-4">
            Pegue a thumbnail de qualquer vídeo do Youtube
          </h1>
        </header>

        <main className="flex flex-col max-w-6xl mx-auto gap-4 p-2 justify-center">
          <p className="text-center text-xl">
            Para pegar a thumbnail de qualquer vídeo do Youtube, basta inserir a
            URL, no formato abaixo: <br />
            <strong className="text-stone-700 text-xl font-semibold">
              https://www.youtube.com/watch?v=967DBySw8QA
            </strong>
          </p>

          <form
            action="post"
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="url"
              placeholder="URL do vídeo"
              className="bg-stone-200 rounded text-center text-xl p-1 outline-orange-800"
            />

            <button
              type="submit"
              name="get-thumb-button"
              className="bg-amber-700 text-stone-100 font-medium text-xl p-2 rounded cursor-pointer hover:bg-amber-800 transition"
            >
              Pegar Thumbnail do Youtube
            </button>
          </form>

          {videoId && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="w-full h-[2px] bg-gradient-to-r from-stone-600 to-stone-200"></div>
                <strong className="text-stone-700 text-2xl text-center my-4">
                  Sua Thumbnail
                </strong>

                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Thumbnail Image Max Quality"
                  className="mx-auto rounded-md mb-4"
                />

                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Thumbnail Image Default Quality"
                  className="mx-auto rounded-md"
                />
              </div>

              <div className="flex flex-col break-words">
                <div className="w-full h-[2px] bg-gradient-to-l from-stone-600 to-stone-200"></div>
                <strong className="text-stone-700 text-2xl text-center my-4">
                  URL das imagens
                </strong>

                <p className="bg-stone-200 text-xl p-2 rounded-md mb-4 text-center">
                  {`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                </p>

                <p className="bg-stone-200 text-xl p-2 rounded-md text-center">
                  {`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                </p>
              </div>

              <div className="w-full h-[2px] bg-gradient-to-r from-stone-600 to-stone-200"></div>
              <p className="text-justify text-stone-600">
                Clique com o botão direito na imagem para fazer o download.
                Destaque a URL acima e copie para a área de transferência.{" "}
                <br /> Se estiver pelo celular, clique e segure na imagem par
                fazer o download.
              </p>
            </div>
          )}
        </main>
      </div>

      <footer className="text-stone-700 text-sm text-right p-2">
        <a
          href="https://francissportfolio.vercel.app/"
          target="_blank"
          className="text-stone-700 font-semibold hover:text-orange-800"
        >
          Francis Verissimo
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
