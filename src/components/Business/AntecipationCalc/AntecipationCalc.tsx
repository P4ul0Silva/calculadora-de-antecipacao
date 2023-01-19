import {useForm, SubmitHandler, UseFormHandleSubmit, FieldValues } from "react-hook-form"
import { useState } from "react";
import { Container } from "./style"
import { IAntecipationResultData, IAntecipationCalcData } from "./IAntecipationCalcData.interface";
import { api } from "../../../services/api";
import { serialize } from "v8";

export const AntecipationCalc = () => {

    const [result, setResult] = useState<Array<number>>([])
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit: SubmitHandler<IAntecipationResultData> = data => console.log(data);

    const getResults = (data: any) => {
        api.post("/", {
            amount: Number(data.amount),
            installments: data.installments,
            mdr: data.mdr,
            days: data.days 
            }).then((res: any) => {

                const obj: IAntecipationResultData = res.data
                const serialized: Array<number> = Object.values(obj).map(key => key)
                setResult(serialized)
                console.log(result)
            })
        }

    return (
        <Container>
            <div className="container">
            <div className="wrapper">
                <div className='inputs'>
                    <h2>Simule sua Antecipação</h2>
                    <form onChange={handleSubmit(getResults)}>
                        <label htmlFor="amount">Informe o valor da venda</label>
                        <input {...register("amount", {required: true, minLength: 4})} type="text" name="amount" id="amount" placeholder="1000" />
                        {errors.amount && <span>Campo obrigatório</span>}
                        <label htmlFor="installments">Em quantas parcelas</label>
                        <input {...register("installments", {required: true, maxLength: 2})}type="text" name="installments" id="installments" placeholder="12"/>
                        {errors.amount && <span>Campo obrigatório</span>}
                        <small>Máximo de 12 parcelas.</small>
                        <label htmlFor="mdr">Informe o percentual de MDR</label>
                        <input {...register("mdr", {required: true, maxLength: 3})} type="text" name="mdr" id="mdr" placeholder="ex: 2"/>
                        {errors.amount && <span>Campo obrigatório</span>}
                    </form>
                </div>
            <div className='results'>
                <h3>
                   VOCÊ RECEBERÁ: 
                </h3>
                <ul>
                    <li>Amanhã: R$ {result[0] ? result[0].toLocaleString() : "0,00"}</li>
                    <li>Em 15 dias: R$ {result[1] ? result[1].toLocaleString() : "0,00"}</li>
                    <li>Em 30 dias: R$ {result[2] ? result[2].toLocaleString() : "0,00"}</li>
                    <li>Em 90 dias: R$ {result[3] ? result[3].toLocaleString() : "0,00"}</li>
                </ul>
            </div>
            </div>
            </div>
        </Container>
    )
}