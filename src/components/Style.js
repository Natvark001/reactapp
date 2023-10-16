const Style=()=>{

  const h1Style= { backgroundColor:'red',
    color:'black',
    border:'1px solid black',
    textAlign:'center'
}
  
    return (
    <div className="container">
      <h1 className='title' style={h1Style}>Hello World</h1>
      <p style={{color:'blue',backgroundColor:'gray'}}>Greetings from the other side</p>
      <p style={h1Style}>This is the new one</p>


    </div>
  )
    }
export default Style;