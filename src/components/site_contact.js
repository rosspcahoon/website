import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SiteContact extends Component  {

    render() {
        return (
            <div>
                    <h2 class="text-center header"> Contact Information < /h2>
                    <dl class="row">
                      <dt class="col-sm-3">Github:</dt>
                      <dd class="col-sm-9">rosspcahoon</dd>

                      <dt class="col-sm-3">Email:</dt>
                      <dd class="col-sm-9">ross(dot)p(dot)cahoon(at)gmail(dot)com
                      </dd>

                    </dl>
            </div>
        );
    }
}