import { NavLink } from 'react-router-dom';
import useAlert from "../hooks/useAlert";
import useStudentList from "../hooks/useStudentList";

function Home() {
  const { dataList, query, handleQueryChange } = useStudentList();
  const showAlert = useAlert();

  return (
    <>
      {showAlert}
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
          {dataList.map(({ id, name, age, phone }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{phone}</td>
              <td><NavLink to={`/detail/${id}`}>详情</NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
