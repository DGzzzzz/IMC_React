import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const res = () => {
        const imc = peso / (altura * altura);

        if (imc >=0 && imc <18.5) {
            return (
                <>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                    <p>IMC abaixo do peso ideal</p>
                </>
            )
        } else if (imc >= 18.5 && imc < 24.9) {
            return (
                <>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                    <p>IMC dentro do peso ideal</p>
                </>
            )
        } else if (imc >= 25 && imc < 29.9) {
            return (
                <>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                    <p>IMC acima do peso ideal</p>
                </>
            )
        } else {
            return (
                <>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                    <p>IMC obesidade</p>
                </>
            )
        }   
    }           
    return (
        <>
        <div className={styles.container}>
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder="Altura (em metros)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                <input className={styles.input} type="number" placeholder="Peso (em quilograma)" onChange={evento => setPeso(parseFloat(evento.target.value))} />
            </form>
            {res()}
        </div>
        </>
    )
} 

export default Formulario;