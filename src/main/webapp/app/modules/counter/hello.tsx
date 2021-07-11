class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.setState ({user: 'Jim'})
    }
  
    render() {
      return <h1>Hello World {this.state}</h1>;
    }
  }