import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";

import { BlogDetailComponent } from "./blog-detail.component";
import { RouterTestingModule } from "@angular/router/testing";
import { EventManager } from "@angular/platform-browser";
import {
  UserService,
  AuthGuard,
  AdminAuthGuard,
  AuthenticationService,
  BlogService
} from "@my-company-frontend/shared";
import { PresentationalComponentsModule } from "@my-company-frontend/presentational-components";

describe("BlogDetailComponent", () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BlogDetailComponent],
        providers: [
          BlogService,
          EventManager,
          UserService,
          AuthenticationService,
          AuthGuard,
          AdminAuthGuard
        ],
        imports: [
          RouterTestingModule,
          HttpClientModule,
          PresentationalComponentsModule,
          MatCardModule,
          MatButtonModule,
          MatCommonModule,
          MatDatepickerModule,
          MatInputModule,
          MatCheckboxModule,
          MatRadioModule,
          MatSidenavModule,
          MatListModule,
          MatIconModule,
          MatToolbarModule,
          MatTabsModule,
          MatPaginatorModule,
          MatTableModule,
          MatOptionModule,
          MatSelectModule,
          MatNativeDateModule
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
