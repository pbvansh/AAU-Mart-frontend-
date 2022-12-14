import AdminDashbord from "../components/admin/AdminDashbord";
import Banner from "../components/Banner";
import Header from "../components/Header";
import JWT from 'jsonwebtoken'
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isAdminAtomState } from "../Atoms/authAtom";
import HomeFeed from "../components/HomeFeed";



export default function Home() {

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtomState)
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JWT.decode(token)
    if (user?.isAdmin) setIsAdmin(true);
  }, [])

  function authUse() {
    if (isAdmin) {
      return (
        <main>
          <AdminDashbord />
        </main>
      )
    }
    else {
      return (
        <main className="max-w-screen-2xl mx-auto min-h-screen">
          <Banner />
          <HomeFeed />
        </main>
      )
    }
  }

  return (
    <div className="">
      <Header name='AAU-Mart' />
      {
        authUse()
      }
    </div>
  )
}
