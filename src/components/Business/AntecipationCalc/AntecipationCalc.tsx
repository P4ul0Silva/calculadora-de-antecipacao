import react from 'react'
import "./style.css"

export const AntecipationCalc = () => {


    return (

        <div className='container'>
            <div className="wrapper">
                <div className='inputs'>
                    <h2>Simule sua Antecipação</h2>
                    <form >
                        <label htmlFor="saleValue">Informe o valor da venda</label>
                        <input type="text" name="saleValue" id="saleValue" />
                        <label htmlFor="installments">Em quantas parcelas</label>
                        <input type="text" name="installments" id="installments" />
                        <small>Máximo de 12 parcelas.</small>
                        <label htmlFor="mdrPercentage">Informe o percentual de MDR</label>
                        <input type="text" name="mdrPercentage" id="mdrPercentage" />
                    </form>
                </div>
            <div className='results'>
                <h3>
                   VOCÊ RECEBERÁ: 
                </h3>
                <ul>
                    <li>Amanhã: R$ 0,00</li>
                    <li>Em 15 dias: R$ 0,00</li>
                    <li>Em 30 dias: R$ 0,00</li>
                    <li>Em 90 dias: R$ 0,00</li>
                </ul>
            </div>
            </div>
        </div>
    )
}