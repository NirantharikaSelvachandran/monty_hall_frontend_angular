import { Component } from '@angular/core';
import { Simulations, MontyService } from '../service/monty.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrl: './simulations.component.css'
})
export class SimulationsComponent {
  games: number = 1000;
  switchDoor: boolean = true;
  result: Simulations | null = null;
  isLoading: boolean = false;
  private loadingTimeout: any;

  constructor(private montyService: MontyService,private snackBar: MatSnackBar) { }

  startSimulation(): void {
    this.isLoading = true;

    this.loadingTimeout = setTimeout(() => {
      this.isLoading = false;
    }, 5000);

    this.montyService.simulate(this.games, this.switchDoor).subscribe(
      (data: Simulations) => {
        this.result = data;
        this.stopLoading();
        this.showSuccessToast();
      },
      (error) => {
        console.error('Error during simulation', error);
        this.stopLoading();
      }
    );
  }

  stopLoading(): void {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 400);
  }

  showSuccessToast(): void {
    this.snackBar.open('Simulation completed successfully!', 'Close', {
      duration: 3000,
    });
  }
}
