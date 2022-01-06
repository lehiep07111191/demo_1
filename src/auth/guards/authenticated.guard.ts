// import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

// @Injectable()
// export class AuthenticatedGuard implements CanActivate {
//   async canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest();
//     return await request.isAuthenticated();
//   }
// }

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthenticatedGuard extends AuthGuard('jwt') {}
