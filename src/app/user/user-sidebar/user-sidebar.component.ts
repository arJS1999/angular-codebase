import { Component } from '@angular/core';
import {
  faCartPlus,
  faDisplay,
  faMoneyCheckDollar,
  faCommentAlt,
  faCode,
  faListUl
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  faProduct = faDisplay;
  faCart = faCartPlus;
  faCode = faCode;
  faChat=faCommentAlt;
  faList=faListUl
}
