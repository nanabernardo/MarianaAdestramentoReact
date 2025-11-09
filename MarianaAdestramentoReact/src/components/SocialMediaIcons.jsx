import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialMediaIcons = () => {
  /* Icones de redes sociais fixos */
  return (
    <div className="flex right-55 top-1/3 flex-row justify-center items-center gap-4 z-50 p-6">
      <button
        onClick={() => window.open("https://wa.me/5511976978597", "_blank")}
        className="bg-highlight p-3 rounded-full hover:bg-hoverbtn transition-colors w-12 h-12 flex items-center justify-center"
      >
        <FaWhatsapp size={24} className="text-white"></FaWhatsapp>
      </button>
      <button
        onClick={() =>
          window.open(
            "https://www.facebook.com/marianabernardo.adestradora",
            "_blank"
          )
        }
        className="bg-highlight p-3 rounded-full hover:bg-hoverbtn transition-colors w-12 h-12 flex items-center justify-center"
      >
        <FaFacebook size={24} className="text-white"></FaFacebook>
      </button>
      <button
        onClick={() =>
          window.open(
            "https://www.instagram.com/mariana.adestradora/",
            "_blank"
          )
        }
        className="bg-highlight p-3 rounded-full hover:bg-hoverbtn transition-colors w-12 h-12 flex items-center justify-center"
      >
        <FaInstagram size={24} className="text-white"></FaInstagram>
      </button>
    </div>
  );
};
export default SocialMediaIcons;
