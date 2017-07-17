import { Component, OnInit } from '@angular/core';

import { Member } from '../model/member';
import { MyService } from '../service/my-service.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private heroService: MyService) { }

  ngOnInit(): void {
    this.heroService.getMembers()
      .then(members => this.members = members.slice(1, 5));

    console.log(this.members.length);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/