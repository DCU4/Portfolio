import React, { Component } from 'react';

export const Work = (props) => {

    return (

            <div className="work info">
                <section>
                    <p><a data-text="_________" href={props.link}>{props.title}</a></p>
                    <div className="project">
                        <a href={props.link}><img src={props.img} /></a>
                    </div>
                </section>
            </div>

    );

}