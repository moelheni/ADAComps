import React, { Component } from 'react'

import Navbar from './Navbar'
import TitledCard from './TitledCard'
import List from './List'
import TitleAndSub from './TitleAndSub'
import UserCard from './UserCard'
import Button from './Button'
import Progress from './Progress'
import DropdownButton from './DropdownButton'
import FormCard from './FormCard'
import Form from './Form'
import { Input, Textarea, Checkbox } from './Inputs'
import { Separator } from './Utils'
import Alert from './Alert'
import SearchInput from './SearchInput'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showPopup: false
    }
  }
  render () {
    return (
      <div className='App'>
        <Navbar>
          <div>
            <DropdownButton menuButton={() => <i className='far fa-bell' />} menu={() => <List width='400px'>
              <TitleAndSub title='Mokhles' subTitle='Student' />
              <div>ahmed</div>
            </List>} />
          </div>
        </Navbar>

        <div style={{margin: '100px 20px 30px 20px'}}>
          <Button onClick={() => this.setState({showPopup: !this.state.showPopup})}>Show Alert</Button>
        </div>

        <div style={{margin: '30px 20px 30px 20px', width: '400px'}}>
          <SearchInput onSearch={(e) => console.log(e)} placeholder='Search for something' />
        </div>

        <div style={{margin: '30px 20px 30px 20px', width: '400px'}}>
          <SearchInput filled onSearch={(e) => console.log(e)} placeholder='Search for another' />
        </div>

        <Alert closeFunction={() => this.setState({showPopup: !this.state.showPopup})} onConfirm={() => this.setState({showPopup: !this.state.showPopup})} showen={this.state.showPopup} kind='success' title='Good' message='Everything is ok' />

        <TitledCard
          width='300px'
          title='Title'
          subTitle='Hey'
          content={() => <React.Fragment>
            <List striped>
              <div>sassi</div>
              <div>ahmed</div>
              <div>mariem</div>
              <div>manelle</div>
            </List>
            <Separator />
            <List>
              <TitleAndSub title='Mokhles' subTitle='Student' />
              <div>
                <Progress value={60} />
              </div>
              <div>ahmed</div>
            </List>
            <Button>Add <strong>Something</strong></Button>
          </React.Fragment>}
          menu={() => <List>
            <TitleAndSub title='Mokhles' subTitle='Student' />
            <div>ahmed</div>
          </List>} />

        <TitledCard
          width='400px'
          background='#282f2f'
          inverseColor
          title='Title'
          subTitle='Hey'
          menuButton={() => '+'}
          content={() => <React.Fragment>
            <List>
              <UserCard picture='http://www.businessnews.com.tn/images/album/BN36170yahya-bouhlel.jpg' horizontal>
                <TitleAndSub title='Mokhles' subTitle='Student' />
              </UserCard>
              <UserCard picture='http://www.businessnews.com.tn/images/album/BN36170yahya-bouhlel.jpg'>
                <TitleAndSub title='Mokhles' subTitle='Student' />
              </UserCard>
              <div>
                <Progress value={80} background='#d0d6d4' progressBackground='#47b9c1' height='6px' />
              </div>
              <div>ahmed</div>
            </List>
            <Separator color='white' />
            <Button onClick={() => window.alert('works')} filled>Add <strong>Something</strong></Button>
          </React.Fragment>}
          menu={() => <h1>menu</h1>} />

        <FormCard>
          <Form onSubmit={(e) => window.alert('Submit works')}>
            <h1>Signup</h1>
            <Input placeholder='ok' />
            <Input placeholder='ok' />
            <Input placeholder='ok' />
            <Textarea />
            <Button filled>Save</Button>
            <Checkbox onChange={e => console.log(e)}>Recieve notifications</Checkbox>
          </Form>
        </FormCard>
      </div>
    )
  }
}

export default App
