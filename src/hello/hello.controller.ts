import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloService } from './hello.service';
import { Hello } from 'shared/lib/transfer/hello.dto';
import {
  HelloServiceController,
  HelloServiceControllerMethods,
} from 'shared/lib/generated/hello';

@Controller()
@HelloServiceControllerMethods()
export class HelloController implements HelloServiceController {
  constructor(private readonly helloService: HelloService) {}

  getHello(): Hello {
    return { message: this.helloService.getHello() };
  }
}
