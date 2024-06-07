// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const check = {
  true: '',
  false: 'displaychange',
}

const Body = () => {
  const getstatus = val => {
    switch (val) {
      case true:
        return check.true
      case false:
        return check.false
      default:
        return null
    }
  }
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-con">
            <div className={`leftbar-con ${getstatus(showLeftNavbar)}`}>
              <h1>Left Navbar Menu</h1>
              <ul className="items-con">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
            <div className={`content-con ${getstatus(showContent)}`}>
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sitamet, consectetur adipiscing elit,sed do
                eiusmod tempor incidiunt ut labore etdolore magna aliqua.Ut enim
                ad minim veniam
              </p>
            </div>
            <div className={`rightbar-con ${getstatus(showRightNavbar)}`}>
              <h1>Right Navbar</h1>
              <div className="ad-con">
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
