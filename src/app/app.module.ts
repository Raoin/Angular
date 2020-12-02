import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { SearchMembersComponent } from './search-members/search-members.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule  } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    MemberDetailsComponent,
    SearchMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
