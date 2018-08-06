import React, { Component } from 'react';

export default class SiteContact extends Component  {

    render() {
        return (
            <div className = 'in-set'>
                    <h2 className="text-center header"> Contact Information < /h2>
                    <dl className="row">
                      <dt className="col-sm-3">Github:</dt>
                      <dd className="col-sm-9" ><a href = "https://github.com/rosspcahoon" > rosspcahoon </a></dd>

                      <dt className="col-sm-3">Email:</dt>
                      <dd className="col-sm-9">ross(dot)p(dot)cahoon(at)gmail(dot)com
                      </dd>

                    </dl>
            </div>
        );
    }
}