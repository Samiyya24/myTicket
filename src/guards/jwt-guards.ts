import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtGuards implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req);

    const adminHeader = req.headers.authorization;
    if (!adminHeader) {
      throw new UnauthorizedException({ message: "Admin roy'xatdan o'tmagan" });
    }
    const bearer = adminHeader.split(" ")[0];
    const token = adminHeader.split(" ")[1];
    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Admin roy'xatdan o'tmagan(token xato)",
      });
    }
    let admin: any;
    try {
      admin = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException({
        message: "Admin roy'xatdan o'tmagan(token berilmagan)",
      });
    }
    req.admin = admin;
    console.log(req);

    return true;
  }
}
