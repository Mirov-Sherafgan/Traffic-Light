import React from 'react';
import './Light.css';
import Circle from '../Circle';


const colors = {
    red: {
      backgroundColor: "red"
    },
    yellow: {
      backgroundColor: "yellow"
    },
    green: {
      backgroundColor: "green"
    },
    black: {
      backgroundColor: "black"
    }
  };

export default class Light extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: colors.red,
            yellow: colors.black,
            green: colors.black,
            next: 'yellow'
            }
        }

        handeLightChange = () => {
            switch(this.state.next) {
                case 'red':
                    this.setState({
                        red: colors.black,
                        yellow: colors.black,
                        green: colors.green,
                        next: 'green'
                    });
                    break;

                case 'yellow':
                    this.setState({
                        red: colors.black,
                        yellow: colors.yellow,
                        green: colors.black,
                        next: 'red'
                    });
                    break;

                case 'green':
                    this.setState({
                        red: colors.red,
                        yellow: colors.black,
                        green: colors.black,
                        next: 'yellow'
                    });
                    break;
            }
        }

        componentDidMount() {
            setInterval(() => {
                this.handeLightChange()
            }, 1000);
        }

        render() { 
            return(
                <div className="light">
                    <Circle color={this.state.red} />
                    <Circle color={this.state.yellow} />
                    <Circle color={this.state.green} />
                </div>

            )
        }
    }