import { useState, useEffect } from "react";
import { getStuListApi } from "../api/stuApi";

function Home() {
  const [stuList, setStuList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getStuListApi();
      console.log(data);
      setStuList(data)
    };
    fetchData()
  }, []);
  return (
    <>
      <h1>主页</h1>
      <ul>
        {stuList.map((item) => (
          <li key={item.id}>
            id: {item.id}, name: {item.name}, age: {item.age}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
