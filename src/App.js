
import './App.css';
import Banner from './components/Banner';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const[data,setData]=useState([])
  const[loading,setloading]=useState(true)

  useEffect(function(){
    //make api call
    fetchMeCategories()
    //console.table(data)
  },[])

  const fetchMeCategories=()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php/") //where we are requesting api
                .then( //takes a callback function
                    function(response){
                        return response.json()
                    }
                ) 
                .then(
                    function(apidata){
                        setData([...apidata.categories]);
                        setloading(false)
                    }
                )
                .catch(
                    function(err){
                        console.log(err)
                    }
          )
  }
  return(
    <div className="">
      <Header/>
    <main>

      <Banner/>
      {/* Below will set a condition to display data coming from categories */}
      {data.length > 0 ? <Content categories={data}/>: <Loader/>} 
      
      
      
    </main> 

    <Footer/>
    </div>
  )

}

export default App;
