import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                

                <Dialog.Portal>
                    {/*o portal coloca o conteudo do modal fora de todas as divs*/}
                    <Dialog.Overlay/>{/*coloca o fundo preto opaco atras do modal*/}

                    <Dialog.Content>
                        <Dialog.Title>Nova Transações</Dialog.Title>
                        <Dialog.Close/>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    );
}