import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeatherForDakar() {
    try {
      // API Météo Open-Meteo (Gratuite, sans besoin de clé API)
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6937&longitude=-17.4441&current_weather=true';
      const response = await firstValueFrom(this.httpService.get(url));
      
      const weather = response.data.current_weather;
      return {
        ville: 'Dakar',
        temperature: `${weather.temperature}°C`,
        vent: `${weather.windspeed} km/h`,
        condition: weather.weathercode === 0 ? 'Ensoleillé' : 'Nuageux / Variable',
      };
    } catch (error) {
      return { ville: 'Dakar', temperature: '28°C', condition: 'Ensoleillé (mode secours)' };
    }
  }
}