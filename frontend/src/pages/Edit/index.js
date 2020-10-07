import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Edit({match}) {
    const [vehicle, setVehicle] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState();
    const [description, setDescription] = useState('');
    const [sold, setSold] = useState(0);

    const history = useHistory();

    //Função para deletar veículo
    async function deleteVehicle() {
        try{
        await api.delete(`veiculos/${match.params.id}`);
        alert('Deletado com sucesso');
        history.push('/');
        }catch(err){
        alert('Erro ao deletar');
        }
        
    }
    async function loadVehicle(){

        await api.get(`/veiculos/${match.params.id}`).then(response => {
            setBrand(response.data[0].brand);
            setDescription(response.data[0].description);
            setSold(response.data[0].sold);
            setVehicle(response.data[0].vehicle);
            setYear(response.data[0].year);
        })

    }
    async function updateVehicle(){
            const data = {
                vehicle,
                brand,
                year,
                description,
                sold
            }
            try{
                await api.put(`veiculos/${match.params.id}`, data);
                alert('Alterado com sucesso');
                history.push('/');
            }catch(err){
                alert('Erro ao alterar');
            }
        }
    useEffect(() => {
        loadVehicle()
    }, [])
    return(
        
        <div className="container-modal" >
            
                <div className="container">
                <p className="titleModal">Novo Veículo</p>
                <form class="col s12" onSubmit={updateVehicle}>
                    
                <div class="row">
                    <div class="input-field col s6">
                        <input 
                            id="vehicle" 
                            type="text" 
                            value = {vehicle}
                            onChange = {e => setVehicle(e.target.value)}
                        />
                        <label for="vehicle">Veículo</label>
                    </div>
                    <div class="input-field col s6">
                        <input 
                            id="brand" 
                            type="text" 
                            value = {brand}
                            onChange = {e => setBrand(e.target.value)} 
                        />
                        <label for="brand">Marca</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input 
                            id="year" 
                            type="text" 
                            value = {year}
                            onChange = {e => setYear(e.target.value)}
                        />
                        <label for="year">Ano</label>
                    </div>
                    <div class="switch col s6">
                        <label>
                            <input 
                            type="checkbox" 
                            value = {sold}
                            onChange = {e => setSold(e.target.value)}
                            />
                            <span class="lever"></span>
                            Vendido
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea 
                            id="textarea1" 
                            class="materialize-textarea"
                            value = {description}
                            onChange = {e => setDescription(e.target.value)}
                        ></textarea>
                        <label for="textarea1">Descrição</label>
                    </div>
                </div>
                <div className="buttons">
                    <a class="waves-effect waves-light btn btModal" onClick={deleteVehicle}>DELETE</a>
                    <button type="submit" class="waves-effect waves-light btn btModal">EDIT</button>
                    <Link to={`/`} class="waves-effect waves-light btn btModal modal-close">VOLTAR</Link>
                </div>
                </form>
            </div>

        </div>
    );
}