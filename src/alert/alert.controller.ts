/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AlertGateway } from './alert.gateway';

@Controller()
export class AlertController {

    constructor(private alertGateway: AlertGateway){}

    @Post()
    @HttpCode(200)
    sendAlertToAll(@Body() dto: {message: string}){
        this.alertGateway.sendToAll(dto.message);
        console.log("return...")
        return dto;
    }
}
