"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

import { FaWhatsapp } from "react-icons/fa";
import { PiMapPinBold, PiEnvelopeBold, PiDeviceMobileBold } from "react-icons/pi";

import ToastAlerta from "./ToastAlerta";

import { Boton, Input } from "./ui";

export function BloqueContacto() {
  const form = useRef<HTMLFormElement>(null);

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [alertColor, setAlertColor] = useState<string>("red");
  const [alertMessage, setAlertMessage] = useState<string>("¡Ups! Hubo un problema al crear el mensaje.");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      const formData = new FormData(form.current);
      const userName = formData.get("user_name")?.toString().trim();
      const userEmail = formData.get("user_email")?.toString().trim();
      const userPhone = formData.get("user_phone")?.toString().trim();
      const message = formData.get("message")?.toString().trim();

      if (!userName || !userEmail || !userPhone || !message) {
        setAlertColor("red");
        setAlertMessage("Por favor complete todos los campos para enviar un mensaje.");
        handleAlert();
      } else {
        emailjs
          .sendForm("service_p5d2n28", "template_1odshva", form.current, {
            publicKey: "9Lx1ZzKqr2d0THYPw",
          })
          .then(
            () => {
              setAlertColor("green");
              setAlertMessage("¡Gracias! Tu mensaje fue enviado correctamente.");
              handleAlert();
            },
            (error) => {
              setAlertColor("red");
              setAlertMessage("¡Ups! Hubo un problema al enviar el mensaje.");
              handleAlert();
              console.log("Error de envio:", error.text);
            }
          );
      }
    } else {
      setAlertColor("red");
      setAlertMessage("Hubo un problema al crear el formulario.");
      handleAlert();
    }

    setLoading(false);
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <div className="bg-slate-800 border border-slate-700 px-6 sm:px-10 py-8 my-6 rounded-md shadow" id="contacto">
        <div className="sm:flex inline-block flex-row justify-center gap-x-6">
          <div className="sm:basis-2/5 w-full mb-6">
            <div className="mb-6">
              <Link href="/">
                <h1 className="text-3xl">
                  MRuiz | <span className="text-slate-500 font-semibold">Porfolio</span>
                </h1>
              </Link>
            </div>
            <h3 className="mb-2">Contactos</h3>
            <ul className="mb-4">
              <li className="flex items-center mb-1">
                <PiMapPinBold className="me-1.5" /> Rosario, Santa Fe
              </li>
              <li className="flex items-center mb-1">
                <PiEnvelopeBold className="me-1.5" /> matias.ruiz.dg@gmail.com
              </li>
              <li className="flex items-center mb-1">
                <PiDeviceMobileBold className="me-1.5" /> 3416437862
              </li>
            </ul>
            <Link href="https://api.whatsapp.com/send?phone=5493416437862" target="_blank">
              <Boton>
                <div className="flex items-center">
                  <FaWhatsapp className="me-1 text-xl" /> Escribime por Whatsapp
                </div>
              </Boton>
            </Link>
          </div>
          <div className="basis-3/5">
            <h3 className="mb-2">Enviame un mensaje</h3>
            <p className="leading-snug">Rellena el formulario y te responderé a la brevedad.</p>
            <form ref={form} onSubmit={sendEmail} className="md:w-4/5">
              <Input type="text" placeholder="Nombre *" name="user_name" aria-label="Nombre" required />
              <Input type="email" placeholder="Email *" name="user_email" aria-label="Email" required />
              <Input type="tel" placeholder="Celular *" name="user_phone" aria-label="Celular" required />
              <textarea
                placeholder="Mensaje" aria-label="Mensaje"
                rows={2}
                name="message"
                className="mb-3 block w-full bg-slate-200 text-slate-900 px-3 py-2 rounded-md text-sm placeholder-slate-600"
              />
              <p className="text-xs">* Campos obligatorios</p>
              <Boton type="submit" value="Send" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </Boton>
            </form>
          </div>
        </div>
      </div>
      {showAlert && <ToastAlerta color={alertColor} mensaje={alertMessage} />}
    </>
  );
}

export default BloqueContacto;
