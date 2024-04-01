import React, { useEffect } from 'react'

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            window.botpressWebChat.init({
                botId: '6ba77f9f-ea16-4970-bef0-be5a07f441ea',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                clientId: '6ba77f9f-ea16-4970-bef0-be5a07f441ea',
            })
        }
    }, [])

    return <div id="webchat" />
}

export default Chatbot