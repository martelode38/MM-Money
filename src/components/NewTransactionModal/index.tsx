import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

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

                <button type="submit">Cadastrar</button>
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}