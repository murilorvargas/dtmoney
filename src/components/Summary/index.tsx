import { useContext } from 'react'

import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeIgm from '../../assets/outcome.svg'
import totalIgm from '../../assets/total.svg'

export function Summary() {
  const transactions = useContext(TransactionsContext)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIgm} alt="Saídas" />
        </header>
        <strong>R$ 1.259,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIgm} alt="Total" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  )
}