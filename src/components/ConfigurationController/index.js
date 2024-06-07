// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onchangeContent = () => {
        onToggleShowContent()
      }

      const onchangeLeftbar = () => {
        onToggleShowLeftNavbar()
      }

      const onchangeRightbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-con">
          <h1>Layout</h1>
          <div className="checkboxes">
            <div className="input-con">
              <input
                id="content"
                type="checkbox"
                checked={showContent}
                onChange={onchangeContent}
              />
              <label htmlFor="content">content</label>
            </div>
            <div className="input-con">
              <input
                id="leftBar"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onchangeLeftbar}
              />
              <label htmlFor="leftBar">Left Navbar</label>
            </div>
            <div className="input-con">
              <input
                id="rightBar"
                type="checkbox"
                checked={showRightNavbar}
                onChange={onchangeRightbar}
              />
              <label htmlFor="rightBar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
