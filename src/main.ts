import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import the routes configuration
import { RouterModule } from '@angular/router'; // Import RouterModule for routing functionality
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Add router configuration directly here
    RouterModule,  // Include RouterModule for routing functionality
  ],
})
  .catch((err) => console.error(err));