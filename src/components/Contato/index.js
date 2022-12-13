import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import firebase from "../../firebaseConnection";
import "./contato.css";
import trevo from '../../assets/trevo.svg';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contato() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = async (data) => {
    await firebase
      .firestore()
      .collection("contact")
      .add({
        name:  data.name,
        email: data.email,
        phone: data.phone,
        destination: data.destination,
        message: data.message,
      })
      .then(() => {
        toast.success('Mensagem enviada com sucesso!')
      })
      .catch((error) => {
        alert("ERRO" + error);
      });

    await firebase
      .firestore()
      .collection("mail")
      .add({
        to: "portosegurotaxi1@gmail.com",
        message: {
          subject: "Olá, gostaria de fazer um orçamento!",
          html: JSON.stringify(data),
        },
      });

    reset({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCe0JQno4p9Ss6PZJRpAM83vPwdLgQ8j-c",
  });
  const position = {
    lat: -23.987154,
    lng: -46.234272,
  };
  return (
    <section id="contato">
      <div className="form-container">
      <div className="container-contato">
        <div className="clover">
          <img src={trevo} alt="trevo" />
        </div>
        <div className="title">
          <h1>Contato</h1>
        </div>
      </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome*</label>
            <input
              className={errors.name ? "red-border" : ""}
              placeholder="Digite seu nome..."
              {...register("name", { required: true })}
            />
            <label>E-mail*</label>
            <input
              className={errors.email ? "red-border" : ""}
              placeholder="Digite seu e-mail..."
              {...register("email", { required: true })}
            />
            <label>Telefone*</label>
            <input
              className={errors.phone ? "red-border" : ""}
              placeholder="Digite seu telefone..."
              {...register("phone", { required: true })}
            />

            <label>Mensagem</label>
            <textarea
              placeholder="Digite sua mensagem..."
              {...register("message")}
            />

            <div className="contact-button">
              <button id="btn" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="map-container">
        <div className="map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={position}
              zoom={15}
            >
              <Marker position={position} />
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
        <div className="p-contact">
        <p>R. Argentina, 36 - Jardim Vitoria Guarujá - SP, 11440-370</p>
        </div>
      </div>
      
    </section>
  );
}

export default Contato;
