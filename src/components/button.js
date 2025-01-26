const NormalButton = ({ buttonText, func }) => {
  return (
    <div className="container w-full h-10 p-2 my-5 sm:m-10 ">
      <button
        onClick={func}
        className="relative flex flex-row justify-center items-center w-full max-w-24 h-10 text-white bg-blaze-orange-600 border border-blaze-orange-100
     rounded-lg drop-shadow-2xl shadow-inner overflow-hidden whitespace-nowrap text-ellipsis hover:bg-blaze-orange-700 active:bg-blaze-orange-800 disabled:bg-blaze-orange-200"
      >
        <h2>{buttonText}</h2>
      </button>
    </div>
  );
};

const Button = ({ buttonText, func }) => {
  return (
    <div className="container w-full h-10 p-2 my-5 sm:m-10">
      <button
        onClick={func}
        className="relative flex flex-row justify-center items-center p-2 text-white bg-blaze-orange-600 border border-blaze-orange-100 
        rounded-lg drop-shadow-2xl shadow-inner overflow-hidden whitespace-nowrap text-ellipsis  hover:bg-blaze-orange-700 active:bg-blaze-orange-800 disabled:bg-blaze-orange-200"
      >
        <h2>{buttonText}</h2>
      </button>
 
    </div>
  );
};

export {NormalButton, Button}
