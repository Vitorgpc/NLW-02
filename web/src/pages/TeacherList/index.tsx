import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis." >
                <form id="search-teachers">
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
                    <Input name="time" label="Hora" type="time" />
                </form>
            </PageHeader>
        
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>  
    )
}

export default TeacherList;