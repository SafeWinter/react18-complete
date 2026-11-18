import { useState, useEffect } from "react";
import { getStuListApi } from "../api/stuApi";

function Home() {
  const [stuList, setStuList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getStuListApi();
      setStuList(data);
    };
    fetchData();
  }, []);

  function handleQueryChange(e) {
    setQuery(e.target.value.trim());
  }

  return (
    <>
      <h1>学生列表</h1>
      {/* 搜索框 */}
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        className="form-control"
      />

      {/* 数据列表 */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>联系方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {stuList.map(({ id, name, age, phone }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{phone}</td>
              <td>详情</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
