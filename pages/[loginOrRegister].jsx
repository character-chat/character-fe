import { useEffect, useState } from "react";
import styles from "../public/css/register/register.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { updateUserInfo } from "../store/actions";

const Register = ({ updateUserInfo }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { loginOrRegister } = router.query;
  const [activeBubbleTags, setActiveBubbleTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("userId", uuidv4());
    formData.append("username", userName);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("tags", activeBubbleTags.join(",")); // Convert array to comma-separated string

    await axios
      .post("http://localhost:8080/api/v1/user/register", formData)
      .then((res) => {
        console.log(res.data);
        updateUserInfo(res.data);
        router.push("/chat");
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("password", password);
    formData.append("email", email);

    await axios
      .post("http://localhost:8080/api/v1/user/login", formData)
      .then((response) => {
        console.log(response);
        updateUserInfo(response.data);
        router.push("/chat");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const containerWidth = 300;
  const containerHeight = 100;
  const bubbleSize = 50;

  // Function to check overlap
  const doesOverlap = (a, b, size) => {
    const distance = Math.sqrt((a.left - b.left) ** 2 + (a.top - b.top) ** 2);
    return distance < size; // if distance is less than bubble size, they overlap
  };

  // Generate non-overlapping bubbles
  const defaultTags = ["news", "AI", "food", "book"];
  const [bubbles, setBubbles] = useState(() => {
    const newBubbles = [];
    const maxTries = 100; // 限制尝试的次数以避免无限循环
    let tries = 0;

    while (newBubbles.length < 4 && tries < maxTries) {
      const newBubble = {
        id: newBubbles.length,
        top: Math.random() * (containerHeight - bubbleSize),
        left: Math.random() * (containerWidth - bubbleSize),
        content: defaultTags[newBubbles.length - 1 < 0 ? 0 : newBubbles.length],
      };

      if (
        newBubbles.every(
          (existingBubble) =>
            !doesOverlap(newBubble, existingBubble, bubbleSize)
        )
      ) {
        newBubbles.push(newBubble);
      }

      tries++;
    }
    return newBubbles;
  });

  useEffect(() => {
    console.log(activeBubbleTags);
  }, [activeBubbleTags]);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container}`}>
        <div className={styles.myCard}>
          <div className="row h-full ">
            <div className="col-md-6">
              <div className={styles.myLeftCtn}>
                {loginOrRegister === "login" ? (
                  <div
                    className={`text-center needs-validation ${styles.myForm}`}
                  >
                    <header>登录</header>

                    <div className={` ${styles.formGroup} my-5`}>
                      <i className={`fas fa-envelope ${styles.icon}`}></i>
                      <input
                        className={`myInput ${styles.myInput} mx-2`}
                        type="text"
                        placeholder="Email"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                    <div className={`form-group ${styles.formGroup} my-4`}>
                      <i className={`fas fa-lock ${styles.icon}`}></i>
                      <input
                        className={`myInput ${styles.myInput} mx-2`}
                        type="password"
                        placeholder="密码"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>

                    <div className={`form-group ${styles.formGroup} my-3`}>
                      <label>
                        <input
                          id="check_1"
                          name="check_1"
                          type="checkbox"
                          required
                        />
                        <small> 我已阅读用户协议</small>
                        <div className="invalid-feedback">必须阅读.</div>
                      </label>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center my-3">
                      <i className="fab fa-weixin mx-3"></i>
                      <i className="fab fa-google mx-3"></i>
                    </div>

                    <input
                      type="submit"
                      className={`btn ${styles.butt}`}
                      value="登录"
                      onClick={handleLogin}
                    />
                  </div>
                ) : (
                  <div
                    className={`text-center needs-validation ${styles.myForm}`}
                  >
                    <header>创建一个新账号</header>
                    <div className={`form-group ${styles.formGroup} my-3`}>
                      <i className={`fas fa-user ${styles.icon}`}></i>
                      <input
                        className={`myInput ${styles.myInput} mx-2`}
                        type="text"
                        placeholder="用户名"
                        id="username"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                    <div className={`form-group ${styles.formGroup}my-3`}>
                      <i className={`fas fa-envelope ${styles.icon}`}></i>
                      <input
                        className={`myInput ${styles.myInput} mx-2`}
                        type="text"
                        placeholder="Email"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                    <div className={`form-group ${styles.formGroup} my-3`}>
                      <i className={`fas fa-lock ${styles.icon}`}></i>
                      <input
                        className={`myInput ${styles.myInput} mx-2`}
                        type="password"
                        placeholder="密码"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                    <span>请点击泡泡以选择你的默认标签</span>
                    <div
                      className="my-3 d-flex position-relative"
                      style={{
                        height: `${containerHeight}px`,
                        width: `${containerWidth}px`,
                      }}
                    >
                      {bubbles.map((bubble) => (
                        <div
                          key={bubble.id}
                          className={`${styles.ballbox} m-2 position-absolute`}
                          style={{
                            top: activeBubbleTags.includes(bubble.content)
                              ? bubble.top - 10
                              : bubble.top,
                            left: bubble.left,
                            boxShadow: activeBubbleTags.includes(bubble.content)
                              ? "0px 10px 15px rgba(0, 0, 0, 0.2)" // 添加阴影效果
                              : "",
                          }}
                          onClick={() => {
                            if (activeBubbleTags.includes(bubble.content)) {
                              setActiveBubbleTags((prevIds) =>
                                prevIds.filter(
                                  (name) => name !== bubble.content
                                )
                              );
                            } else {
                              setActiveBubbleTags((prevIds) => [
                                ...prevIds,
                                bubble.content,
                              ]);
                            }
                          }}
                        >
                          <p className={`${styles.ball} ${styles.bubble}`}>
                            {bubble.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className={`form-group ${styles.formGroup} my-3`}>
                      <label>
                        <input
                          id="check_1"
                          name="check_1"
                          type="checkbox"
                          required
                        />
                        <small> 我已阅读用户协议</small>
                        <div className="invalid-feedback">必须阅读.</div>
                      </label>
                    </div>
                    <input
                      type="submit"
                      className={`btn ${styles.butt}`}
                      value="创建账号"
                      onClick={handleSubmit}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6  h-100% ">
              <div className={`${styles.myRig6htCtn} h-100 `}>
                <video
                  className={`${styles.video} h-full`}
                  autoPlay
                  muted
                  loop
                  src="video.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo, 
  };
};

const mapDispatchToProps = {
  updateUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
