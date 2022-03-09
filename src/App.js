import { useState } from "react";
import axios from "axios";
import HeaderIndex from "./components/header/HeaderIndex";
import MainIndex from "./components/main/MainIndex";
import FooterIndex from "./components/footer/FooterIndex";

function App() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [avatar, setAvatar] = useState('')

  const [reposData, setReposData] = useState([])
  const [starredData, setStarredData] = useState([])
  const [errSearch, setErrSearch] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `https://api.github.com/users/${search}`
    getData(url)
  }

  const getData = async (url) => {
    try {
      const user = await axios.get(url)
      setUserData(user.data)
    } catch (err) {
      setErrSearch(true)
      setName('')
    }
  }

  const setUserData = ({ name, login, company, location, avatar_url }) => {
    setName(name)
    setUsername(login)
    setCompany(company)
    setLocation(location)
    setAvatar(avatar_url)
    const reposURL = `https://api.github.com/users/${login}/repos`
    const starredURL = `https://api.github.com/users/${login}/starred` 
    getReposData(reposURL, starredURL)
  }

  const getReposData = async (reposURL, starredURL) => {
    try {
      const repos = await axios.get(reposURL)
      const starred = await axios.get(starredURL)
      reposSetter(repos.data, starred.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const reposSetter  = (Rdata, Sdata) => {
    setReposData(Rdata)
    setStarredData(Sdata)
  }
  

  return (
    <div className="App">
      <HeaderIndex
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        name={name}
        username={username}
        company={company}
        location={location}
        avatar={avatar}
        errSearch={errSearch}
      />
      <MainIndex 
        reposData={reposData}
        starredData={starredData}
        errSearch={errSearch}
      />
      <FooterIndex />
    </div>
  );
}

export default App;
