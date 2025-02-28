import { useState } from 'react'
import { DownOutlined, UpOutlined, RedoOutlined, UndoOutlined, StopOutlined, LoadingOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function App() {

  const [status, setStatus] = useState<string>('Conectando  ')
  const [action, setAction] = useState<string>("Otto esperando instrucciones")
  const [conected, setConected] = useState<boolean>(false)

  const iconStyles = {
    fontSize: '65px'
  }

  const buttonStyles = {
    width: '100px',
    height: '100px'
  }

  const frontButton = async() => {
    setAction("Avanzando")
  }

  const backButton = async() => {
    setAction("Retrocediendo")
  }

  const leftButton = async() => {
    setAction("Girando izquierda")
  }

  const rightButton = async() => {
    setAction("Girando derecha")
  }

  const stopButton = async() => {
    setAction("Otto esperando instrucciones")
  }

  return (
    <div className='App'>
      <div className='info'>
        <h1>{status}{ !conected && <LoadingOutlined />}</h1>
        <h3>{conected && action}</h3>
      </div>

      <div className='sectionOne'>
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<UpOutlined style={iconStyles}/>}
          onClick={frontButton}
          disabled={!conected}
          />
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<DownOutlined style={iconStyles}/>}
          onClick={backButton}
          disabled={!conected}
        />
      </div>
      <div className='sectionTwo'>
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<UndoOutlined style={iconStyles}/>}
          onClick={leftButton}
          disabled={!conected}
        />
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<RedoOutlined style={iconStyles}/>}
          onClick={rightButton}
          disabled={!conected}
        />
      </div>
      <Button
        variant='solid'
        color='danger'
        style={buttonStyles}
        icon={<StopOutlined style={iconStyles}/>}
        onClick={stopButton}
        disabled={!conected}
      />
    </div>
  )
}

export default App
