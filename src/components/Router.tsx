import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { AdminLayout } from '../layouts/AdminLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
