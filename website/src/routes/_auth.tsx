import { Outlet } from '@remix-run/react'
import { Windows95Provider } from '~/components/95'

export default function App() {
    return (
        <Windows95Provider>
            <Outlet />
        </Windows95Provider>
    )
}
