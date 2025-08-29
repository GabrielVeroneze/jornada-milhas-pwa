export function registerSW() {
    window.addEventListener('load', () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.ts', { scope: '/' })
                .then(registration => {
                    console.log('Service Worker registrado:', registration)
                })
                .catch(error => {
                    console.error('Erro ao registrar o Service Worker:', error)
                })

            navigator.serviceWorker.ready
                .then(registration => {
                    console.log('Service Worker está pronto e ativo:', registration)

                    registration.update()
                })
        }
    })
}
