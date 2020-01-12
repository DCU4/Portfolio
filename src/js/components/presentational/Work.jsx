import React, { Component } from 'react';


export const Work = (props) => {

    return (

            <div className="work info">
                <section>
                    <a target="_blank" className={props.darkMode} data-text="__________________" href={props.link}>{props.title}</a>
                    <p>{props.info}</p>
                    <div className="project">
                        <a target="_blank" href={props.link}><img src={props.img} /></a>
                    </div>
                </section>
            </div>

    );

}