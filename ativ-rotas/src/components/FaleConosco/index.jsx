import './style.css'; 

export default function FaleConosco(){ 
    function handleSumbit(evente) { 
        event.preventDefault() 
        alert("Mensagem envidada com sucesso!")
    } 

    return( 
        
        <section className='contato'> 
        <h1>Fale Conosco</h1> 
        <p>Tire suas dúvidas e peça um orçamento sem compromisso.</p> 
        <form className='form' onSubmit={handleSumbit}>
            <div>
            <label className='campo'> 
                <span>Nome</span> 
                <input type='email' required placeholder='Seu e-mail'/> 
                </label> 
                <label className='campo'> 
                    <span>Telefone</span> 
                    <input type='tel' required placeholder='(99) 9999-8888'/>
                </label> 
            </div> 
            <label className='campo'> 
                <span>Assunto</span> 
                <input type='text' required placeholder='Abertura de empresa'/>   
            </label> 

            <label className='campo'> 
                <span>Mensagem</span> 
                <textarea rows="6" required placeholder='Conte-nos um pouco do seu caso...'> 
                    </textarea>  
            </label>        
        </form>
        </section>
    )
}