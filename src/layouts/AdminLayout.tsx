import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function AdminLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
