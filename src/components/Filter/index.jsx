export const Filter = ()=>{
    return(
        <div style={{textAlign:"end",marginRight:"20px"}}
        >
          <h3 >Filtrar</h3>
          <div style={{display:"flex",flexDirection:"column", margin:"5px",justifyContent:"center", alignItems:'end'}}>
            <div >
              <label style={{marginRight:"5px"}} htmlFor="">Todas</label>
              <input type="checkbox" style={{width: "20px", height: "25px", verticalAlign: "middle"}}/>
            </div>
            <div>
              <label style={{marginRight:"5px"}} htmlFor="">Sem Glúten</label>
              <input type="checkbox" style={{width: "20px", height: "25px", verticalAlign: "middle"}}/>
            </div>
            <div>
              <label style={{marginRight:"5px"}} htmlFor="">Sem derivados de leite</label>
              <input type="checkbox" style={{width: "20px", height: "25px", verticalAlign: "middle"}}/>
            </div>
          </div>
            <button style={{maxWidth:"100px", marginTop:"15px"}}>Filtrar</button>
          
        </div>
    )
}