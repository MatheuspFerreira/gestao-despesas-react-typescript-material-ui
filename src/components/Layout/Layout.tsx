import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import MySelect from "../select/MySelect";
import { datas } from '../../helpers/datas';



export default function Layout () {
    const [ano, setAno]= useState<string>('');
    const [mes, setMes]= useState<string>('');


    useEffect(()=>{
        console.log(ano,mes)

    },[ano,mes])

    
    return(
        <div>
            <Header>
               
                <div>
                    <h3 className='text-xl'>Despesa total: <strong> R$ 8300,00</strong></h3>
                </div>

                <div className='flex flex-row space-x-4'>
                    <MySelect 
                        data={datas.anos}
                        date={ano}
                        setDate={setAno}
                        label={'Ano'}
                    
                    />
                    <MySelect 
                        data={datas.meses}
                        date={mes}
                        setDate={setMes}
                        label={'Mês'}
                    
                    />

                </div>

            </Header>
            
        </div>

    );
}