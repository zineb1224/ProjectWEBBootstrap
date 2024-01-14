import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-item-member',
  templateUrl: './item-member.component.html',
  styleUrls: ['./item-member.component.css']
})
export class ItemMemberComponent implements OnInit {

  @Input()member:any;
  public member_item:any;
  constructor(private memberService:MemberService) { }

  ngOnInit(): void {
    this.memberService.getById(this.member.member_id).subscribe(
      (data) => 
      {
        this.member_item = data;
        console.log(data)
      }
    )
  }
  

}
