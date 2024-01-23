import { useState, useRef } from "react";
import "./Formulario.css";
import emailjs from '@emailjs/browser';
import LoadingIcon from "./LoadingIcon";

const Contato = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [phone, setPhone] = useState("");
  const [assunto, setAssunto] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(false);
  const [loadingIcon, setLoadingIcon] = useState(true);

  const estiloPlaceholder = {
    fontSize: "18px",
  }

  function sendEmail(e) {
      e.preventDefault();
      if (name === "" || email === "" ||  phone === "" || assunto === "" || mensagem === "" ) {
        
        setError && alert("Preencha todos os campos");

        return;
      }
      loadingIcon,
      setLoadingIcon,
      setLoading(true); 
      const templateParams = {
        from_name: name,
        mensagem: mensagem,
        email: email,
        phone: phone,
        assunto: assunto,


      };

      emailjs
        .send("service_uu7syjm", "template_d16dk8p", templateParams, "fW-9x7noIkhe3sTqP")
        .then(
          (respose) => {
            setSucess ("Email enviado", respose.status, respose.text);
            setName("");
            setEmail("");
            setPhone("");
            setAssunto("")
            setMensagem("");
            setTimeout(() => {
              setSucess("")
            },2000)
          },
          (err) => {
            console.error("Err", err);
            setError("Erro ao enviar email, por favor tente novamente. ")
          }
        )
        .finally(() => {
          setLoading(false);
        });
  }

  const form = useRef (null);

  return (
    <>
      <div className="formulario-container">
        <div className="icon-title">
          <h1 className="title">Entre em contato <span style={{color: "#0ef"}}>Comigo!</span></h1>
          </div>
          <div className="formulario-card">
            <form ref={form} className="form" onSubmit={sendEmail}>
              <div className="box-primeiro">
              <input
                className="input"
                type="text"
                placeholder="Nome completo"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="from_name" 
              />
              <input
                className="input"
                type="text"
                placeholder="Endereço do Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                />
              </div>
              <div className="box-segundo">
              <input 
                className="input2" 
                type="tel" 
                placeholder="Número de Telefone" 
                minLength="11"
                maxLength="15"
                onChange={(e) => setPhone(e.target.value)}
                value={phone} 
                name="phone" 
                />  
              <input
                className="input2"
                type="text"
                placeholder="Assunto"
                onChange={(e) => setAssunto(e.target.value)}
                name="name"
                value={assunto}
              />        
              </div>
              <div className=" box-terceiro">
              <textarea
                className="deixe-sua-msg"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
                name="message"
              />
              </div>
            {!loading && (
              <div className="btn-div">
                <input 
                className="button-form" 
                type="submit" 
                value="Enviar Mensagem" 
                style={estiloPlaceholder}
                />
              </div>
            )}
            </form>
            {loading ? (
                <div className="loading-content">
                  <LoadingIcon />
                  <p style={{ color: "#fff", fontSize: "15px" }}> Enviando email...</p>
                </div>
              ) : (
                <div className="loading-content">
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  {sucess && (
                    <p style={{ color: "green", fontSize: "15px" }}>
                      Mensagem enviada com sucesso
                    </p>
                  )}
                </div>
              )}
          </div>
      </div>
    </>
  )
}

export default Contato