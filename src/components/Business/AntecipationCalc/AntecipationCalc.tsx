import {useForm} from "react-hook-form"
import { useState } from "react";
import { Container } from "./style"
import { IAntecipationCalcData } from "./IAntecipationCalcData.interface";
import { api } from "../../../services/api";
import { DateModal } from "../DateModal/dateModal";

export const AntecipationCalc = () => {

    const [result, setResult] = useState<Array<number>>()
    const [days, setDays] = useState<Array<number>>([])
    const { register, handleSubmit, formState: { errors } } = useForm<IAntecipationCalcData>();

    function getResults(data: IAntecipationCalcData) {
        if(data.days) {
            setDays(data.days)
        } else {
            const defaultDays = [1, 15, 30, 90]
            setDays(defaultDays)
        }
        api.post("/", {
            amount: Number(data.amount),
            installments: data.installments,
            mdr: data.mdr,
            days: data.days 
        }).then(({data}) => {
            const values: number[] = Object.values(data);
                if(values) {
                    setResult(values)
                }
            })
        }

    return (
        <Container>
            {/* <DateModal/> */}
            <div className="container">
            <div className="wrapper">
                <div className='inputs'>
                    <h2>Simule sua Antecipação</h2>
                    <form onChange={handleSubmit(getResults)}>
                        <label htmlFor="amount">Informe o valor da venda *</label>
                        <input {...register("amount", {required: {value: true, message: "Campo Obrigatório"}, minLength: {value: 4, message: "Valor mínimo R$1.000"}})} type="text" name="amount" id="amount" placeholder="1000" />
                        {errors.amount && <span>{errors.amount.message}</span>}
                        <label htmlFor="installments">Em quantas parcelas *</label>
                        <input {...register("installments", {required: {value:true, message: "Máximo de 12 parcelas."}, max: {value: 12, message: "Máximo de 12 parcelas."}, })}type="text" name="installments" id="installments" placeholder="12"/>
                        {errors.installments && <span>{errors.installments.message}</span>}
                        <label htmlFor="mdr">Informe o percentual de MDR *</label>
                        <input {...register("mdr", {required: {value: true, message: "Campo obrigatório"}})} type="text" name="mdr" id="mdr" placeholder="ex: 2"/>
                        {errors.mdr && <span>{errors.mdr.message}</span>}
                    </form>
                </div>
            <div className='results'>
                <h3>
                   VOCÊ RECEBERÁ: 
                </h3>
                <ul>
                    { !result ?
                        <>
                        <li>Amanhã: R$ 0,00</li>
                        <li>Em 15 dias: R$ 0,00</li>
                        <li>Em 30 dias: R$ 0,00</li>
                        <li>Em 90 dias: R$ 0,00</li>
                        </>
                        :
                        days.map((d, i) => 
                            <li key={d}>{d === 1 ? "Amanhã: " : 
                            `Em ${days[i]} dias:`} 
                            {<b>{`R$ ${result[i].toLocaleString()}`}</b>}</li>)
                    }
                </ul>
            </div>
            </div>
            </div>
        </Container>
    )
}