import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from '@/registerSW'
import App from '@/App'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)

registerSW()
