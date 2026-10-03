
import { postsData } from "./posts.js";

function Post({ post }) {
  return (
    
    <article
      className="border-4 border-dashed border-teal-600 rounded-4xl
      w-full  px-5 py-5 mb-20 max-w-[250px] sm:max-w-[500px]  md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[900px] 3xl:max-w-[1000px]
      bg-linear-to-r from-cyan-500 from-10% via-green-300 via-30%
      to-emerald-200 to-90%"
    >

      {/* IMAGEN */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-w-[250px]  sm:max-w-[350px] md:max-w-[200px]
        lg:max-w-[400px] mx-auto rounded-2xl
        border-teal-600 border-4"
      />

      {/* FECHA */}
      <p className="text-center font-bold text-teal-800 mt-2 mb-3">
        {post.created_at}
      </p>

      {/* TÍTULO */}
      <h2
        className="text-2xl font-bold text-green-600 mb-4 text-center
        bg-gradient-to-r from-teal-700 to-cyan-600
        bg-clip-text text-transparent"
      >
        {post.title}
      </h2>

      {/* DESCRIPCIÓN */}
      <p className="text-gray-700 mb-2">
        {post.description}
      </p>

      {/* CONTENIDO */}
      <p>{post.content}</p>

    </article>
  );
}

function App() {
  return (
    <div>

      {/* TÍTULO Y GIF */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5  ">

        <h1
          className="text-3xl sm:text-4xl sm:ml-1  md:text-4xl lg:text-5xl  xl:text-6xl md:mb-10 md:ml-20
          font-bold text-center
          bg-gradient-to-r from-teal-700 to-cyan-500
          bg-clip-text text-transparent mt-20"
        >
          GALERÍA GATUNA
        </h1>

        <img
          className="w-[100px] mx-auto md:mr-24   md:mx-0"
          src="./imagenes/gati.gif"
          alt="gif de un gato"
        />

      </div>

      {/* GALERÍA */}

        <div
    className="grid grid-cols-1 ml-5  sm:ml-24 md:grid-cols-2 md:ml-10 gap-6 md:gap-0
    w-full  mx-auto px-4  max-w-[300px]  sm:max-w-[450px]   md:max-w-[700px] lg:max-w-[800px] 
     lg:ml-28 lg:gap-16  xl:max-w-[1000px]    xl:ml-40 xl:gap-20
    2xl:max-w-[1300px] min-[1800px]:translate-x-[150px]"
  >
    
        {postsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("cuerpo")
);

root.render(<App />);

