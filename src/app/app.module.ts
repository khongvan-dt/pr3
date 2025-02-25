import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// dashboard components
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemsComponent } from './dashboard/sidebar/sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './dashboard/sidebar/sidebar-header/sidebar-header.component';


// icons
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { TaskIconComponent } from './dashboard/icons/task-icon/task-icon.component';
import { ReportIconComponent } from './dashboard/icons/report-icon/report-icon.component';
import { ProjectIconComponent } from './dashboard/icons/project-icon/project-icon.component';
import { SettingsIconComponent } from './dashboard/icons/settings-icon/settings-icon.component';
import { CalendarIconComponent } from './dashboard/icons/calendar-icon/calendar-icon.component';
import { DashboardIconComponent } from './dashboard/icons/dashboard-icon/dashboard-icon.component';
import { TimeManageIconComponent } from './dashboard/icons/time-manage-icon/time-manage-icon.component';

// othersimport { SnippetComponent } from './components/docs/snippet/snippet.component';
import { FolderIconComponent } from './components/docs/icons/folder-icon/folder-icon.component';
import { AngularIconComponent } from './components/docs/icons/angular-icon/angular-icon.component';

import { StaffLIstComponent } from './company/staff-list/staff-list.component';
import { PendingListComponent } from './company/pending-list/pending-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabGroupComponent } from './company/tab-group/tab-group.component';
import { OverlayComponent } from './dashboard/overlay/overlay.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { SnippetComponent } from './components/docs/snippet/snippet.component';
import { HomeComponent } from './company/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    // dashboard
    LayoutComponent,
    TopBarComponent,
    OverlayComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemsComponent,
    SidebarHeaderComponent,


    // icons
    DocIconComponent,
    TaskIconComponent,
    ReportIconComponent,
    ProjectIconComponent,
    SettingsIconComponent,
    CalendarIconComponent,
    DashboardIconComponent,
    TimeManageIconComponent,

    // others
    SnippetComponent,
    FolderIconComponent,
    AngularIconComponent,
    StaffLIstComponent,
    PendingListComponent,
    TabGroupComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,MatTabsModule,FormsModule ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
