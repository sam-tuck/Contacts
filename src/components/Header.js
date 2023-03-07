
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

export default function Header() {

  return (
    <div>
      <h1 className='Title'>Contact Able</h1>
      <Card.Header className='header'>
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">List Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search">Search Contacts</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item className='mx-auto'>
            
          </Nav.Item> */}
        </Nav>
      </Card.Header>
    </div>
  )
}
