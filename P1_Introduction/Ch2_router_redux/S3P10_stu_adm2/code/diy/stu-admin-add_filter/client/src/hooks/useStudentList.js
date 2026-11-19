import { useEffect, useState } from "react";
import { getStuListApi } from "../api/stuApi";

export default function useStudentList() {
  const [stuList, setStuList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await getStuListApi();
      setStuList(data);
    })();
  }, []);

  const dataList = query
    ? stuList.filter((student) => student.name.match(query))
    : stuList;

  function handleQueryChange(e) {
    setQuery(e.target.value.trim());
  }

  return { dataList, query, handleQueryChange };
}
