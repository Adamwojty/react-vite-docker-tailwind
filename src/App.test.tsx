import {describe, expect, it} from 'vitest'
import {render} from 'test/utils'
import App from 'App'

describe('<App /> component', () => {
  it('renders <App />', () => {
    let {getByTestId} = render(<App />)
    expect(getByTestId('app body')).toBeDefined()
  })
})
