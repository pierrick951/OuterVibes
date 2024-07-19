import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
type Props = {};

const pageErro: string[] = [
  "Error 404",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f304/512.gif",
  "Go home",
];
function Error({}: Props) {
  return (
    <div className="flex items-center justify-center bg-zinc-800 h-screen w-full px-5">
      <Helmet>
        <title>Error404</title>
        <meta name="Error404" content="Page not find" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-100 to-white p-5 text-center rounded-xl shadow-2xl shadow-black max-w-md h-60 flex flex-col justify-between items-center">
       
          <div className="py-2 w-full h-full flex justify-center items-center">
            <h1 className="text-4xl font-bold text-zinc-800 flex flex-row items-center gap-3  ">
              <span>{pageErro[0]}</span>
              <img
                className="w-30"
                src={pageErro[1]}
                alt="🌄"
                width="60"
                height="60"
              />
            </h1>
          </div>
          <Link
            to={"/"}
            className="bg-red-400 hover:bg-red-500 rounded-xl px-5 py-2 text-white font-bold w-28 "
          >
            {pageErro[2]}
          </Link>
        </div>
    
    </div>
  );
}
export default Error;
