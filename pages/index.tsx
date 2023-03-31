/* eslint-disable @next/next/no-img-element */
import { Inter } from 'next/font/google'
import ChatBox from './ChatBox/ChatBox'
import SideBar from '../components/SideBar'

import styled from 'styled-components'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const AppWrapper = styled.div`
display: flex;
width: 900px;
// box-shadow: rgb(0 0 0 / 25%) 0px 30px 60px -12px,rgb(0 0 0 / 30%) 0px 18px 36px -18px;
box-shadow: 0 0 10px rgba(222,222,222,0.4) inset,0 0 30px rgba(244,244,244,0.7);
`

export default function Home() {
  const[currentCharacter,setCurrentCharacter] = useState({id: 1, name: "Elon Musk",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",history:[]})
  const [currentChatHistory, setCurrentHistory] = useState([{historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'}]);

    const reLoadHistory=(id:any)=>{
      if(id===1){
        setCurrentHistory([
          {historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you",answer:"i am fine",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you again",answer:"not",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'}])
      }
      else {
        setCurrentHistory([
          {historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you",answer:"i am fine",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you again",answer:"not",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how old are you",answer:"23",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"really?",answer:".....",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},])
      }
    }

  const mockData = [
    {id: 1,
    name: "Elon Musk",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"},
    {id: 2,
    name: "Sam Altman",
    img: "https://i.insider.com/63d93b280a08ae0018a62b4f"},
    {id: 3,
    name: "Thomas",
    img: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW"},
    {id: 4,
    name: "TJ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/T._J._Miller_by_Gage_Skidmore.jpg/440px-T._J._Miller_by_Gage_Skidmore.jpg"}]
  
  return (
    <div className="App">
      <section className="gradient-custom">
  <div className="container py-5">

    <div className="row">

      <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">

        <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>

        <div className="card mask-custom">
          <div className="card-body">

            <ul className="list-unstyled mb-0">
              <li className="p-2 border-bottom">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">John Doe</p>
                      <p className="small text-white">Hello, Are you there?</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Just now</p>
                    <span className="badge bg-danger float-end">1</span>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">Danny Smith</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">5 mins ago</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">Alex Steward</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">Ashley Olsen</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">Kate Moss</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2 border-bottom">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">Lara Croft</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li className="p-2">
                <a href="#!" className="d-flex justify-content-between link-light">
                  <div className="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div className="pt-1">
                      <p className="fw-bold mb-0">Brad Pitt</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="small text-white mb-1">5 mins ago</p>
                    <span className="text-white float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
                  </div>
                </a>
              </li>
            </ul>

          </div>
        </div>

      </div>

      <div className="col-md-6 col-lg-7 col-xl-7">

        <ul className="list-unstyled text-white">
          <li className="d-flex justify-content-between mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div className="card mask-custom">
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 12 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li className="d-flex justify-content-between mb-4">
            <div className="card mask-custom w-100">
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">Lara Croft</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 13 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
              </div>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
              className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60"/>
          </li>
          <li className="d-flex justify-content-between mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div className="card mask-custom">
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-3">
            <div className="form-outline form-white">
              <textarea className="form-control" id="textAreaExample3" ></textarea>
              <label className="form-label" htmlFor="textAreaExample3">Message</label>
            </div>
          </li>
          <button type="button" className="btn btn-light btn-lg btn-rounded float-end">Send</button>
        </ul>

      </div>

    </div>

  </div>
</section>
    </div>
  );
}
