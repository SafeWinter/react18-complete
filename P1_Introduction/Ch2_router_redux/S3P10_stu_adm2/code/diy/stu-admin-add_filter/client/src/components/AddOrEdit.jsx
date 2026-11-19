import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addStuApi, editStuApi } from "../api/stuApi";

const EDUCATIONS = [
  "小学",
  "初中或职中",
  "高中或职高",
  "专科",
  "本科",
  "硕士",
  "博士",
];

export default function AddOrEdit() {
  const [stu, setStu] = useState(() => ({
    name: "",
    age: "",
    phone: "",
    email: "",
    education: "本科",
    graduationschool: "",
    profession: "",
    profile: "",
  }));

  const navigate = useNavigate();
  const { id } = useParams();

  const submitStuInfo = (e) => {
    e.preventDefault();

    for (const key in stu) {
      if (!stu[key]) {
        return alert("请完善表单的每一项");
      }
    }

    if (id) {
      // edit
      editStuApi(id, stu).then(() =>
        navigate("/home", {
          state: {
            type: "info",
            content: "学生信息修改成功",
          },
        }),
      );
    } else {
      // add
      addStuApi(stu).then(() =>
        navigate("/home", {
          state: {
            type: "success",
            content: "学生信息添加成功",
          },
        }),
      );
    }
  };

  const updateStuInfo = (key) => {
    return (e) => {
      const { value } = e.target;
      if (key === "age" && isNaN(value)) {
        return;
      }
      setStu((pre) => Object.assign({ ...pre }, { [key]: value.trim() }));
    };
  };

  return (
    <div className="container">
      <h1 className="page-header">{id ? "修改" : "添加"}学生</h1>
      <form id="myForm" onSubmit={submitStuInfo}>
        <div className="well">
          <section className="form-group">
            <label>
              姓名
              <input
                type="text"
                className="form-control"
                placeholder="请填写学生姓名"
                value={stu.name}
                onChange={updateStuInfo("name")}
              />
            </label>
          </section>
          <section className="form-group">
            <label>
              年龄
              <input
                type="text"
                className="form-control"
                placeholder="请填写学生年龄"
                value={stu.age}
                onChange={updateStuInfo("age")}
              />
            </label>
          </section>
          <section className="form-group">
            <label>
              电话
              <input
                type="text"
                className="form-control"
                placeholder="请填写学生电话号码"
                value={stu.phone}
                onChange={updateStuInfo("phone")}
              />
            </label>
          </section>
          <section className="form-group">
            <label>
              邮箱
              <input
                type="text"
                className="form-control"
                placeholder="请填写学生邮箱地址"
                value={stu.email}
                onChange={updateStuInfo("email")}
              />
            </label>
          </section>
          <section className="form-group">
            <label>
              学历
              <select
                className="form-control"
                value={stu.education}
                onChange={updateStuInfo("education")}
              >
                {EDUCATIONS.map((e, i) => (
                  <option key={i}>{e}</option>
                ))}
              </select>
            </label>
          </section>
          <section className="form-group">
            <label>
              毕业院校
              <input
                type="text"
                className="form-control"
                placeholder="请填写学生毕业院校"
                value={stu.graduationschool}
                onChange={updateStuInfo("graduationschool")}
              />
            </label>
          </section>
          <section className="form-group">
            <label>
              职业
              <input
                type="text"
                className="form-control"
                placeholder="请填写学生从事的相关职业"
                value={stu.profession}
                onChange={updateStuInfo("profession")}
              />
            </label>
          </section>
          <section className="form-group">
            <label>
              个人简介
              <textarea
                className="form-control"
                rows={10}
                placeholder="请简单的介绍一下你自己，包括兴趣、爱好等信息..."
                value={stu.profile}
                onChange={updateStuInfo("profile")}
              />
            </label>
          </section>
          <button className="btn btn-primary" type="submit">
            确认{id ? "修改" : "添加"}
          </button>
        </div>
      </form>
    </div>
  );
}
