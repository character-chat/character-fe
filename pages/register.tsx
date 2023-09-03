import styles from "../public/css/register/register.module.css";

const Register = () => {
  return (
    <div className={styles.wrap}>
      <div className={`${styles.container}`}>
        <div className={styles.myCard}>
          <div className="row h-100">
            <div className="col-md-6">
              <div className={styles.myLeftCtn}>
                <form
                  className={`text-center needs-validation ${styles.myForm}`}
                  noValidate
                >
                  <header>创建一个新账号</header>
                  <div className={`form-group ${styles.formGroup} my-3`}>
                    <i className={`fas fa-user ${styles.icon}`}></i>
                    <input
                      className={`myInput ${styles.myInput}`}
                      type="text"
                      placeholder="用户名"
                      id="username"
                      required
                    />
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>
                  <div className={`form-group ${styles.formGroup}my-3`}>
                    <i className={`fas fa-envelope ${styles.icon}`}></i>
                    <input
                      className={`myInput ${styles.myInput}`}
                      type="text"
                      placeholder="Email"
                      id="email"
                      required
                    />
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>
                  <div className={`form-group ${styles.formGroup} my-3`}>
                    <i className={`fas fa-lock ${styles.icon}`}></i>
                    <input
                      className={`myInput ${styles.myInput}`}
                      type="password"
                      placeholder="密码"
                      id="password"
                      required
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
                  <input
                    type="submit"
                    className={`btn ${styles.butt}`}
                    value="创建账号"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6  h-100% ">
              <div className={`${styles.myRightCtn} `}>
                <video className={`${styles.video} `} autoPlay muted loop src="video.mp4"></video>
                {/* <div className={`${styles.box}`}>
                  <header>Hello World!</header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <input
                    type="button"
                    className={styles.buttOut}
                    value="了解更多"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
