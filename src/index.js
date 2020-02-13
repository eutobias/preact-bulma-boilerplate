import { h, render } from 'preact'
import AddButon from './components/AddButton'

const App = props => {
  return (
    <div>
      <h1>TESTE 123</h1>
      <AddButon />
    </div>
  )
}

render(<App />, document.getElementById('app'))
