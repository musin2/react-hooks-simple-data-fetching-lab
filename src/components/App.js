import { useEffect, useState } from "react";

// create your App component here
function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res)=> res.json())
      .then((data)=>{setFetchedData((x) => x=data.message)
        setIsLoaded(true)
      })
  },[])


  if (!isLoaded) {
    return <p>"Loading..."</p>;
  } 

  return <img src={fetchedData} alt="A Random Dog"></img>;
}

export default App;