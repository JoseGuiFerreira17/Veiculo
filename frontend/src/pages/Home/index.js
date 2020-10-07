import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

import { FiTag } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';



function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [details, setDetails] = useState([]);
  
  //Variáveis de cadastro
  const [id, setId] = useState();
  const [vehicle, setVehicle] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState();
  const [description, setDescription] = useState('')
  const [sold, setSold] = useState(0);

  {/*Função para buscar todos os dados no banco*/ }
  async function createVehicle(e) {
    e.preventDefault();
    const data = {
      vehicle,
      brand,
      year,
      description,
      sold
    }
    try{
      await api.post('veiculos', data);
      alert('Cadastrado com sucesso');
    }catch(err){
      alert('Erro ao cadastrar');
    }
  }

  {/*Função para buscar todos os dados no banco*/ }
  async function loadVehicles() {
    api.get('veiculos').then(response => {
      setVehicles(response.data)
    });
  }

  {/*Renderizando dados cada vez que a página é recarregada*/ }
  useEffect(() => {
      loadVehicles();
  }, []);

  {/*Função para buscar detalhes de apenas um veículo*/ }
  async function detailsVehicle(id) {
    await api.get(`veiculos/${id}`).then(response => {
      setDetails(response.data);
    });
  }


  return (
    //Menu da página
    <div className="content">
      <nav>
        <div class="header nav-wrapper">
          <div className="row">
            <a href="#" class="brand-logo">FULLSTACK</a>
            <form>
            <div className="row">
              <input 
              className="inputNav right col s6" 
              type="text" 
              />
            </div>
            </form>
          </div>
        </div>
      </nav>
      {/*Sessão de Título da página*/}
      <div class="secTitle">
        <div className="row">
          <p className="titlePage">VEÍCULO</p>
          <a className="icon modal-trigger" href="#cadModal"><FiPlusCircle size="28" color="#364147" /></a>
        </div>
        <br />
        <hr />
      </div>
      <div className="body row">
        {/*Sessão de Lista de veiculos*/}
        <div className="bodyDetail col s6">
          <p className="topic">Lista de veículos</p>
          {/*Listando todos os veículos*/}



          {vehicles.map(v => (
            <div className="vehicle" key={v.id}>
              <p className="vehicleTitle">{v.brand}</p>
              <ul class="name">
                <li><p className="nameVehicle">{v.vehicle}</p></li>
                <li>
                  <FiTag onClick={() => detailsVehicle(v.id)} color="#364147" size="20" className="tag" />
                </li>
              </ul>
              <p className="year">{v.year}</p>
            </div>
          ))
          
          }



        </div>
        {/*Sessão de detalhe do veiculo*/}
        <p className="topic">Detalhes</p>
        <div className="detailVehicle col s6">
          {/*Listando detalhes de veiculo específico*/}
          {details.map(d => (
            <div className="detail" key={d.id}>
              <p className="titleDetail">{d.vehicle}</p>
              <table border="0">
                <td>
                  <tr className="line1">Marca</tr>
                  <tr className="line2">{d.brand}</tr>
                </td>
                <td>
                  <tr className="line1">Ano</tr>
                  <tr className="line2">{d.year}</tr>
                </td>
              </table>
              <p className="description">
                {d.description}
              </p>
              <hr />
              <ul class="name">
                <li>
                  <Link className="button btn modal-trigger" to={`edit/${d.id}`}>
                    <FiEdit2 size="20" />
                    Editar
                  </Link>
                </li>
                <li className="iconButton"><a><FiTag color="#364147" size="20" /></a></li>
              </ul>
            </div>
          ))
          }

        </div>
      </div>
      {/*Estrutura do modal de Cadastro*/}
      <div className="modal container-modal" id="cadModal">
          <div className="container">
            <p className="titleModal">Novo Veículo</p>
            <form class="col s12" onSubmit={createVehicle}>
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
                <button type="submit" class="waves-effect waves-light btn btModal">ADD</button>
                <a class="waves-effect waves-light btn btModal modal-close">FECHAR</a>

              </div>
              </form>
          </div>
      </div>
    </div>
    
    
  );
}

export default Home;
