import { Component } from '@angular/core';
import { PostService } from 'src/app/service/Api/post.service';
import { HelperService } from 'src/app/service/Helper/helper';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {

  constructor(
    private postService: PostService,
    private helperService: HelperService,
  ) {}

  displayedColumns: string[] = ['Id', 'User', 'Email', 'Profile'];
  userList: any = [];
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
    this.postService.getUserList().subscribe((res: any) => {
      console.log('response', res);
      return (this.userList = res.data);
    });
  }
}
