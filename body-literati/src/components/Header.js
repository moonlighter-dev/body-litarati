import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('clicked!')
    }

  return (
    <header>
        <h1>{title}</h1>
        <Button color='green' text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: "body literati"
}

//CSS in JS
//const headingStyle = {
//  color: 'blue',
//  backgroundColor: 'green',
//}

export default Header