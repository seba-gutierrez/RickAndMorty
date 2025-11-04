import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PersonajesComponent } from "./personajes/personajes.component";
import { FormsModule } from '@angular/forms';
import { EpisodiosComponent } from "./episodios/episodios.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, PersonajesComponent, FormsModule, EpisodiosComponent, FooterComponent]
})
export class AppComponent {
  title = 'rickAndMorty';
}
