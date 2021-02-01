import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const NewTfr = () => {
  const [form, setForm] = useState({
    numeroRTC: "",
    idSitio: "",
    dataFalha: "",
    descricao: "",
    tempoGasto: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createTfr();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      
    });
  };

  const createTfr = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/tfrs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const validate = () => {
    let err = {};

    if (!form.numeroRTC) {
      err.numeroRTC = "Campo RTC mandatório";
    }
    if (!form.idSitio) {
      err.numeroRTC = "Campo ID do Sítio mandatório";
    }
    return err;
  };

  return (
    <div className="form-container">
      <h1>Create TFR</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              error={
                errors.numeroRTC
                  ? { content: "Preencha o número RTC", pointing: "below" }
                  : null
              }
              label="Numero RTC"
              placeholder="Número RTC"
              name="numeroRTC"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="ID Sítio"
              placeholder="ID Sítio"
              name="idSitio"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Data da Falha"
              placeholder="Data da Falha"
              name="dataFalha"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Descrição"
              placeholder="Descrição"
              name="descricao"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Tempo Gasto em Horas"
              placeholder="Tempo Gasto em Horas"
              name="tempoGasto"
              onChange={handleChange}
            />
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewTfr;
