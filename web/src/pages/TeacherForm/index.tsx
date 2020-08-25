import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(){
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrivel que voce quer dar aulas."
                description="O Primeiro passo é preencher esse formulario de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo:" />
                    <Input name="avatar" label="Avatar:" />
                    <Input name="whatsapp" label="WhatsApp:" />
                    <Textarea name="bio" label="Biografia:" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Materia:" 
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Portugues', label: 'Portugues' }
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula:" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horarios disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana" 
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda' },
                                        { value: '2', label: 'Terça' },
                                        { value: '3', label: 'Quarta' },
                                        { value: '4', label: 'Quinta' },
                                        { value: '5', label: 'Sexta' },
                                        { value: '6', label: 'Sabado' }
                                    ]}
                                />
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;