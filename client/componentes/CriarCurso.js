import React from 'react'


const CriarCurso = ({onChangeForm, criarCurso}) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Criar Curso</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Nome</label>
                            <input type="text" onChange={(e)=>onChangeForm(e)}  className="form-control" name="nome" id="nome" aria-describedby="emailHelp" placeholder="Nome" />
                        </div>
                       </div>
                    <button type="button" onClick={(e)=>criarCurso()} className="btn btn-danger">Incluir</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CriarCurso