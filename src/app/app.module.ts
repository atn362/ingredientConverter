import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { FormsModule } from '@angular/forms';
import { ImageSearchComponent } from './image-search/image-search.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SpoonMeasurmentsComponent } from './spoon-measurments/spoon-measurments.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDatabaseComponent } from './recipe-database/recipe-database.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementsComponent,
    ImageSearchComponent,
    SpoonMeasurmentsComponent,
    RecipeListComponent,
    RecipeDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
