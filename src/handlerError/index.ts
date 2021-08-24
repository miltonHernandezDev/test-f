import { HttpException, HttpStatus } from "@nestjs/common"

export const INTERNAL_SERVER_ERROR = (message)=> {
    HttpExceptionHandler(HttpStatus.INTERNAL_SERVER_ERROR, message);
}


export const BAD_REQUEST =(message)=> {
    HttpExceptionHandler(HttpStatus.BAD_REQUEST, message);
}



const HttpExceptionHandler = (httpStatus, message) => {
    throw new HttpException({
        status: httpStatus,
        message
      }, httpStatus)
}
