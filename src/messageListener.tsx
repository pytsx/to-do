"use client"
import React from "react"

const MessageListener = React.forwardRef(({ }, ref) => {
  const [message, setMessage] = React.useState<string>("")

  React.useEffect(() => {
    function handleMessage(event: MessageEvent) {
      setMessage(event.data);
      // Aqui você pode adicionar a lógica para lidar com a mensagem
    }

    window.addEventListener('message', handleMessage);

    // Não se esqueça de remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [])
  return <>{message}</>
})

MessageListener.displayName = "MessageListener"
export {
  MessageListener
}