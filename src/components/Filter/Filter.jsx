export const Filter = ()=>{
    return(
        <div 
        style={{display:"flex",flexDirection:"column"}}>
          <h3>Filtrar</h3>
          <div>
            <div>
              <label htmlFor="">Sem derivados de leite</label>
              <input type="checkbox" />
            </div>
            <div>
              <label htmlFor="">Sem Glúten</label>
              <input type="checkbox" />
            </div>
            <div>
              <label htmlFor="">Todas</label>
              <input type="checkbox" />
            </div>
            <button style={{maxWidth:"100px"}}>Filtrar</button>
          </div>
          
        </div>
    )
}