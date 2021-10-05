function Form (){
    return(
        <div className="form">
        <h2>ENTRE EM CONTATO !</h2>
          <form>
            <div className="items-form">
              <input placeholder="Seu nome" type="text"/>
              <input placeholder="Seu número"type="text"/>
              <input placeholder="Seu em-mail" type="text"/>
              <input placeholder="Seu Instagram" type="text"/>
              <input type="submit"/>
            </div>
          </form>
        </div>
        
    )
}

export default Form;