import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionTable } from "./styles";

export function Transactions(){

    interface Transaction{
        id:number;
        description: string;
        type: 'income' | 'outcome';
        price: number;
        category:string;
        createAt: string;
    }
    
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    async function loadTransactions() {
        const response = await fetch('http://localhost:5173/transactions')
        const data = await response.json();
       
        setTransactions(data);
    }
    
    useEffect(() => {
        
        loadTransactions();
    }, [])

    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                <TransactionTable>
                    <tbody>
                        {transactions.map(transactions =>{
                            return(
                                <tr key={transactions.id}>
                                    <td width="50%">{transactions.description}</td>
                                    <td>
                                    <PriceHighLight variant={transactions.type}>{transactions.price}</PriceHighLight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{transactions.createAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
            
        </div>
    );
}