import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// ...

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    ReactiveFormsModule, // Add this line
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
