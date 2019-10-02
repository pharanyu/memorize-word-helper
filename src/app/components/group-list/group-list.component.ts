import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups: string[];       // list of group
  activeIndex: number;    // index of active group
  newGroup: string;       // new group name

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.activeIndex = 0;                                 // start at group index 0
    // this.groups = this.groupService.getGroups();          // get list of groups from Service
    this.groupService.getGroups().subscribe(groups => {
      console.log('groups=', groups);
      this.groups = groups;
    });
    this.groupService.setActiveGroup(this.groups[0]);     // set active group to Service
  }

  /** When selected group */
  onClick(index: number) {
    this.activeIndex = index;                             // change active index to click point
    this.groupService.setActiveGroup(this.groups[index]); // set active group to Service
  }

  /** When Add new group */
  addGroup() {
    this.newGroup = 'new group';                          // create new group with default name
    this.groups.unshift(this.newGroup);                   // add new group to top of list group
    this.groupService.setActiveGroup(this.newGroup);      // set active new group to Service
  }
}
