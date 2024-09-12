const FooterContainer = () => {
  return (
    <footer className="w-full py-5 text-white bg-center lg:bg-cover border-t-2 border-black bg-[url('/footer-bg.jpg')] shadow-boxFooter">
      <p className="text-base text-center font-marvel text-shadow-black-outline">
        Copyright © All Rights Reserved
      </p>

      <p className="text-base text-center font-bangers text-shadow-black-outline">
        Design by{" "}
        <a
          href="https://damyvegaleiva.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Damy J. Vega Leiva
        </a>
      </p>

      <p className="text-base text-center font-marvel text-shadow-black-outline">
        Inspired by{" "}
        <a
          href="https://www.marvel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Marvel
        </a>
      </p>

      <p className="mt-2 text-sm text-center text-gray-600 font-marvel">
        Data and content provided by Marvel. © {new Date().getFullYear()} Marvel
      </p>

      <p className="text-sm text-center text-gray-600 font-marvel">
        For more information, visit{" "}
        <a
          href="https://developer.marvel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Marvel Developer API
        </a>
        .
      </p>
    </footer>
  );
};

export default FooterContainer;
