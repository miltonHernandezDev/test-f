import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { BAD_REQUEST } from './handlerError';
import { convertJsonToXml } from './helpers';
import { RedisCacheService } from './redis-cache/redis-cache.service';

@Injectable()
export class AppService {

  constructor(private readonly rediscache:RedisCacheService){}

  async getCountry(country:string): Promise<Object> {
    
    let countries = await this.rediscache.get("countries")
    if(!countries){
      countries =  await axios.get('https://restcountries.eu/rest/v2/all').then(d => d.data)
      await this.rediscache.set("countries", countries);
    }

   
    const countryGet = countries.find((e)=> e.name.toLowerCase() === country )
    if(!countryGet){
      BAD_REQUEST(`Country "${country}" not found. Please verify annry again`);
    }
    
    return convertJsonToXml(countryGet) ;
  }
}
