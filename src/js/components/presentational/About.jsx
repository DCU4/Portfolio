import React, { Component } from 'react';

export default class About extends Component {

  componentDidMount() {
    let component = document.querySelector('.about');
    component.classList.add('showing');
  }

  componentWillUnmount() {
    let component = document.querySelector('.about');
    component.classList.remove('showing');
  }

    render() {
        const contactInfo = [
            {
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/dylan-connor/'
            },
            {
                title: 'Github',
                link: 'https://github.com/DCU4'
            },
            {
                title: 'Email',
                link: 'mailto:DylanJConnor4@gmail.com'
            }

        ];
        const contactItems = contactInfo.map((items,i) =>
            <a  target="_blank" key={i} href={items.link} className={"contact-link "+this.props.darkMode}>{items.title}</a>
        )
        return (

            <section className="about info">
                <h4>Welcome.</h4>
                <p className="bio">
                My name is Dylan, and I am web developer with experience in HTML5, CSS3, PHP, and JavaScript. My work has revolved around WordPress, Drupal,
                and other tech solutions for businesses both small and large. My play ranges from setting up LED lights with a raspberry pi with Node.js and Python,
                to building a site about Mars using the NASA API with React. I have also worked extensively with designers to create accessible and human-first web apps. 
                </p>

                <p>
                I am an American-Irish dual citizen living in Alexandria, VA. I love to talk code, so feel free to contact me if you would like to work or chat! 
                I am currently working at <a className={this.props.darkMode ? 'dark-mode job' : 'job'} href="https://www.req.co">REQ</a> in Washington, DC.
                </p>

                <div className="contact">
                    {contactItems}
                </div>
            </section>

        );
    }
}