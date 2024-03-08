import {useState} from 'react';
export default function Formulario(){
	const [nome, setNome] = useState('nome');
	const [idade, setIdade] = useState('idade');

	return (
		<>
			<div className='form'>
				<p>Formulario</p>
				<input value={nome} onChange={e => setNome(e.target.value)}/>
				<br/><br/>
				<input value={idade} onChange={f => setIdade(f.target.value)}/>
				<br/><br/>				
				<p>Olá, {nome}. Você tem {idade} anos</p>
			</div>	
		</>
	);
}
