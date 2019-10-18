import React, { Component } from 'react';
// export {esther} from './img/esther.gif';

export const Work = (props) => {

    return (

            <div className="work info">
                <section>
                    <a className={props.darkMode} data-text="__________________" href={props.link}>{props.title}</a>
                    <p>{props.info}</p>
                    <div className="project">
                        <a href={props.link}><img src={props.img} /></a>
                    </div>
                </section>
            </div>

    );

}