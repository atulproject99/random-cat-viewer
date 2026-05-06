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
          Fetch New Cat
        </button>
        {pageState === "initial" ? (
          <div className="state-message initial">
            Welcome! Click the button to fetch a random cat.
          </div>
        ) : pageState === "error" ? (
          <div className="state-message error">
            Oops! Something went wrong while fetching the cat. Please try again.
          </div>
        ) : pageState === "loading" ? (
          <div className="state-message loading">
            Loading your adorable cat...
          </div>
        ) : (
          <CatCard data={data} />
        )}
      </div>
    </>
  );
}

export default App;
