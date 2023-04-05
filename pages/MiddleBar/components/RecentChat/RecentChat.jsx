export const RecentChat = () => {
  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-chat"
          role="tabpanel"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Chat</h3>
            <div>
              <button className="btn btn-dark" type="button">
                New Chat
              </button>
            </div>
          </div>

          <div className="form-group input-group-lg search mb-3">
            <i className="zmdi zmdi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <ul className="chat-list">
            <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
              <span>RECENT CHATS</span>
              <div className="dropdown">
                <a
                  className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="zmdi zmdi-filter-list"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="bot-chat.html" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <div className="avatar rounded-circle no-image bg-primary text-light">
                        <span>
                          <i className="zmdi zmdi-comment-text"></i>
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Support ChatBot
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-circle text-success"></i> Online
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="single-chat.html" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar5.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Jason Porter
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        It is a long established fact that a reader w...
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="group-chat.html" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <div className="avatar rounded-circle no-image timber">
                        <span>UD</span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          UI-Design Group
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-file-text me-1"></i> It is a
                        long established fact that a reader w...
                        <div className="avatar-list avatar-list-stacked mt-1">
                          <img
                            className="avatar xs rounded"
                            src="assets/images/xs/avatar5.jpg"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Sean"
                          />
                          <img
                            className="avatar xs rounded"
                            src="assets/images/xs/avatar6.jpg"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Martin"
                          />
                          <img
                            className="avatar xs rounded"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Terry"
                          />
                          <img
                            className="avatar xs rounded"
                            src="assets/images/xs/avatar4.jpg"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Michelle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="away">
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="single-chat-2.html" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar1.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Michelle Green
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        What Can i do right now?
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar2.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Elizabeth Martin{" "}
                          <span className="badge badge-info">4</span>
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-file-text me-1"></i> It is a
                        long established fact that a reader w...
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar3.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          David Wallace
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        <div className="wave">
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="away">
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar4.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Sean Black
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-end me-1"></i> It is a
                        long established fact that a reader w...
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar6.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Terry Carter
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          16-07-2020
                        </p>
                      </div>
                      <div className="text-truncate">
                        Hello, Terry are you there?
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <div className="avatar rounded-circle no-image cyan">
                        <span>MS</span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Michelle Schultz
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          13-07-2020
                        </p>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-file-text me-1"></i> Meeting
                        start in 20min please be ready...
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <div className="avatar rounded-circle no-image green">
                        <span>RG</span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          React Group
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          11:08 am
                        </p>
                      </div>
                      <div className="text-truncate">
                        It is a long established fact that a reader w...
                        <div className="avatar-list avatar-list-stacked mt-1">
                          <img
                            className="avatar xs rounded"
                            src="assets/images/xs/avatar7.jpg"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Sean"
                          />
                          <img
                            className="avatar xs rounded"
                            src="assets/images/xs/avatar8.jpg"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Martin"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar6.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Terry Carter
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          16-07-2020
                        </p>
                      </div>
                      <div className="text-truncate">
                        Hello, Terry are you there?
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <span className="status rounded-circle"></span>
                      <div className="avatar rounded-circle no-image cyan">
                        <span>MS</span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Michelle Schultz
                        </h6>
                        <p className="small text-muted text-nowrap ms-4 mb-0">
                          13-07-2020
                        </p>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-file-text me-1"></i> Meeting
                        start in 20min please be ready...
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentChat;
