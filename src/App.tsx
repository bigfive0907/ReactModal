import "./App.css";
import { useState } from "react";

type ModalProps = {
  buttonLabel: string;
};

export default function App({ buttonLabel }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  //form value and output 
  const [values, setValues] = useState({
    name: "",
    mail: "",
    password1: "",
    password2: ""
  });
  //display
  const [data,setData] =useState( {
        name: "name",
        mail:"mail",
        password: "pw",
      });
  //open and close
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setMsg("");
  };
  //Modal CSS
  const openModal = (isOpen: any) => {
    if (isOpen) {
      return "open";
    }
  };
  //watch form value and change it
  const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };
  //送信ボタンの処理
  function submitData ()  {
    
      if (values.password1 === values.password2 && values.password1 !== "") {
        setData({
        name: values.name,
        mail: values.mail,
        password: values.password1,
      });
      console.log(values);
      setMsg("SUCCESS ! コンソールと入力情報欄を確認してください。");
    } else {
      setMsg("ERROR ! パスワードが異なるか、入力されていません。");
    }

  };
  return (
    <>
    <button onClick={toggleModal}>{buttonLabel}</button>
      <div className={openModal(isOpen)}>
        <div className={openModal(isOpen)+"__modal"}>
        
        {isOpen && (
          
          <div>
              <p>それぞれの値を入力してください（必須）</p>
              {msg !== "" && <p className="msg">メッセージ：{msg}</p>}
              <div className="form">
                <div className="form__obj">
                  <label>名前</label>
                  <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form__obj">
                  <label>メールアドレス</label>
                  <input
                    name="mail"
                    type="text"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form__obj">
                  <label>パスワード</label>
                  <input
                    name="password1"
                    type="password"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form__obj">
                  <label>パスワード（確認）</label>
                  <input
                    name="password2"
                    type="password"
                    onChange={handleChange}
                  ></input>
                </div>

                <button
                  onClick={() => {
                    submitData();
                  }}
                >
                  送信
                </button>
              
            </div>
            <button onClick={toggleModal}>閉じる</button>
          </div>
          
        )}
      </div>
      </div>
      {data && <div className="data">
        <h3>入力情報</h3>
        <p>name: {data.name}</p>
        <p>mail: {data.mail}</p>
        <p>password: {data.password}</p>
        </div>}
        
    </>
  );
}


