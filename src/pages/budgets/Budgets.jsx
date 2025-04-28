import React, { useEffect, useState } from 'react'
import style from "./Budgets.module.scss"
import { Chart } from '../../components/Chart/ApexChart'
import { useCollectionsData } from '../../hooks/useCollectionsData';
const Budgets = () => {
    const { data, isPending } = useCollectionsData();
    const [pots, setPots] = useState([]);
    const [total, setTotal] = useState(0);
    const [budgets, setBudgets] = useState([])
    const [budgetTotal, setBudgetTotal] = useState(0)
    useEffect(() => {
        if (data && data.pots) {
            setPots(data.pots);
              const totalSum = data.pots.reduce((acc, item) => acc + item.total, 0);
            setTotal(totalSum);
        }
        if(data && data.budgets){
            setBudgets(data.budgets)
            const totalBudgets = data.budgets.reduce((acc, item)=> acc + item.maximum, 0)
            setBudgetTotal(totalBudgets)
        }
    }, [data]);
  return (
    <div>
                  {data ? <Chart budgetTotal={budgetTotal} budgets={data.budgets} /> :   <p>Loading ...</p>           }
    </div>
  )
}

export default Budgets