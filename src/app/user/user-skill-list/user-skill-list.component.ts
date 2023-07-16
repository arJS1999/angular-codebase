import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/service/Api/post.service';
import { HelperService } from 'src/app/service/Helper/helper';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/store/model/skill';
import { Store, select } from '@ngrx/store';
import { selectSkills } from 'src/app/store/selector/skill.selector';

@Component({
  selector: 'app-user-skill-list',
  templateUrl: './user-skill-list.component.html',
  styleUrls: ['./user-skill-list.component.css'],
})
export class UserSkillListComponent {
  @Input() name!: string;
  userData$!: Observable<Skill[]>;

  constructor(
    private postService: PostService,
    private helperService: HelperService,
    private store: Store
  ) {
    this.userData$ = this.store.pipe(select(selectSkills));
    console.log('Constructor');
  }

  displayedColumns: string[] = ['Id', 'Skills'];
  userSkillList: any = [];
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
    console.log('ngOnInit')
    this.postService.getUserSelectedSkillList().subscribe((res: any) => {
      console.log('response', res.data);
      this.userData$.subscribe((data) => {
        console.log('userData', data);
      });
      return (this.userSkillList = res.data);
    });
  }

  ngOnChanges(): void {
    console.log('ngonChanges');
  }
  ngDoCheck(): void {
    console.log('ngDocheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked():void{
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngonDestroy');
  }
}
