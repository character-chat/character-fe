import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function CharacterSet(props) {
  const [name, setName] = useState("cxc");
  const [avatar, setAvatar] = useState("");
  const [api, setApi] = useState("www.sss");
  const [introduction, setIntroduction] = useState("fasdfasfafadsfas");
  const [dataset, setDataset] = useState();
  const [avatarImg, setAvatarImg] = useState();

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/v1/character?id=64369883adbd6279e8c55367",
        { responseType: "blob" }
      )
      .then((response) => {
        const blobUrl = URL.createObjectURL(response.data);
        setAvatarImg(blobUrl);
      });
  }, []);

  const avatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(file);
      setAvatarImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("avatar", avatar);
    formData.append("api", api);
    formData.append("introduction", introduction);

    axios
      .post("http://localhost:8080/api/v1/character", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="main px-xl-5 px-lg-4 px-3">
      <div className="body-page d-flex py-xl-3 py-2">
        <div className="container px-0">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="setting-general"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-header">
                      <h6 className="card-title mb-0">Character Setting</h6>
                      <span className="text-muted small">
                        Update character details
                      </span>
                    </div>
                    <div className="card-body">
                      <form class="row" onSubmit={submitHandler}>
                        <div class="col-lg-6 col-md-12">
                          <div class="form-group mb-3">
                            <label>Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder={name}
                            />
                          </div>
                          <div class="form-group mb-3">
                            <label>Api</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder={api}
                            />
                          </div>
                          <div class="form-group mb-3">
                            <label>Introduction</label>
                            <textarea
                              rows="4"
                              className="form-control"
                              placeholder={introduction}
                            ></textarea>
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Update Details
                          </button>
                          <button type="button" class="btn btn-link">
                            Cancel
                          </button>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="card-body">
                            <div className="col-12">
                              <div className="form-group">
                                <label>Avatar</label>
                                <br />
                                <input
                                  type="file"
                                  className="form-control-file"
                                  onChange={avatarChange}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <img
                                  src={avatarImg}
                                  alt="ss"
                                  style={{ width: "100%", height: "70px" }}
                                />
                              </div>
                            </div>
                            <br />
                            <div className="col-12">
                              <div className="form-group">
                                <label>Dataset</label>
                                <br />
                                <input
                                  type="file"
                                  className="form-control-file"
                                  onChange={avatarChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-4">
                <div className="col-12 col-md-6">
                  <h5>Delete character</h5>
                  <p className="text-muted mb-md-0">
                    Please note, this is a permanent action and will no be
                    recoverable once completed.
                  </p>
                </div>
                <div className="col-auto">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSet;
