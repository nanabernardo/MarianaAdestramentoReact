import React from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.nome,
          user_email: formData.email,
          message: formData.mensagem,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      })
      .catch(() => {
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  return (
    <section className="p-6 text-center text-white">
      <h1 className="text-4xl font-bold text-highlight mb-4">Contato</h1>
      <p className="text-white mb-6 text-center max-w-2xl mx-auto">
        Se você tiver alguma dúvida, sugestão ou apenas quiser bater um papo,
        fique à vontade para entrar em contato conosco. Estamos aqui para
        ajudar!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          required
          className="p-2 rounded-xl border text-white"
        ></input>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu e-mail"
          required
          className="p-2 rounded-xl border text-white"
        ></input>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Sua mensagem"
          className="p-2 rounded-xl text-white border"
        />
        <Button type="submit" className="p-2 rounded text-white">
          Enviar
        </Button>
      </form>

      {/* Icones de redes sociais fixos */}
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
    </section>
  );
};

export default Contato;
