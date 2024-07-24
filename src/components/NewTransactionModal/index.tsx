import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
// nessa eu utilizo a biblioteca radix para melhorar a cessibilidade do projeto
export function NewTransactionModal(){
    return(
        <Dialog.Portal>
        {/*o portal coloca o conteudo do modal fora de todas as divs*/}
        <Overlay/>{/*coloca o fundo preto opaco atras do modal*/}

        <Content>
            <Dialog.Title>Nova Transações</Dialog.Title>
            <CloseButton> 
                <X size={24}/>
            </CloseButton>
            <form action="">
                <input type="text" placeholder="Descrição" required/>
                <input type="number" placeholder="Preço" required/>
                <input type="text" placeholder="Caregoria" required/>

                <TransactionType>
                    <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24}/>
                        Entrada
                    </TransactionTypeButton>
                    
                    <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24}/>
                        Saída
                    </TransactionTypeButton>

                </TransactionType>

                <button type="submit">Cadastrar</button>
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}