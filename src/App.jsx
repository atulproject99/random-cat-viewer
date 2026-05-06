import { useEffect, useState } from "react";
import "./App.css";
import { CatCard } from "./CatCard";
import ApiService from "./service/api-service";
function App() {
  /// page state initial,loading,error,loaded

  const [pageState, setPageState] = useState("initial");
  const [data, setData] = useState(null);
  async function fetchData() {
    setPageState("loading");
    const data = await ApiService.get("/public/cats/cat/random");
    console.log(data);
    if (data.value) {
      setPageState("loaded");
      setData(data.value.data);
      console.log(data.value.data);
      /// Loaded
    } else {
      setPageState("error");
      /// Error
    }
  }

  useEffect(() => {
    fetchData();
    return () => {
      /// Cleanup
    };
  }, []);

  return (
    <>
      <div className="viewer-container">
        <h1 className="viewer-title">Random cat viewer</h1>
        <button onClick={fetchData} className="get-new-button">
          Get new cat
        </button>
        {pageState === "initial" ? (
          <h1>Intital state</h1>
        ) : pageState === "error" ? (
          <h1>Error while api calling</h1>
        ) : pageState === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          <CatCard data={data} />
        )}
      </div>
    </>
  );
}

export default App;
