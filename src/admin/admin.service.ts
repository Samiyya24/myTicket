import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./models/admin.models";
import { Injectable, Res, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import cookieParser from "cookie-parser";
import { Response } from "express";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepo: typeof Admin,
    private readonly jwtService: JwtService
  ) {}

  /****************************************createAdmin *************************************/
  // async createAdmin(@Res() res: Response, createAdminDto: CreateAdminDto)
  async createAdmin({ createAdminDto: CreateAdminDto }) {
    const hashPasword = await bcrypt.hash(CreateAdminDto.hashed_password, 7);
    CreateAdminDto.hashed_password = hashPasword;
    const newAdmin = await this.adminRepo.create(CreateAdminDto);

    const payload = {
      sub: newAdmin.id,
      email: newAdmin.email,
      is_active: newAdmin.is_active,
      is_creator: newAdmin.is_creator,
      roles: "Admin",
    };

    const tokens = this.jwtService.sign(payload, { expiresIn: "10m" });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: "7d",
    });

    newAdmin.hashed_refresh_token = refreshToken;

    // res.cookie("accessToken", tokens,
    // {
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    //   httpOnly: true,
    //   // secure: true, // Расскомментируйте, если используется HTTPS
    //   sameSite: "strict", // Рекомендуется для защиты от CSRF атак
    // });

    //   cookieParser.signedCookie("refreshToken", {
    //     maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    //     httpOnly: true,
    //     // secure: true, // Расскомментируйте, если используется HTTPS
    //     sameSite: "strict", // Рекомендуется для защиты от CSRF атак
    //   });

    await newAdmin.save();
    return {
      newAdmin: newAdmin,
      accessToken: tokens,
      refreshToken: refreshToken,
    };
  }
  /******************************************** generateToken  ********************************* */
  private async generateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      email: admin.email,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };

    return { token: this.jwtService.sign(payload) };
  }

  /***********************************************  signIn *****************************/
  async login(updateAdminDto: UpdateAdminDto) {
    const admin = await this.getAdminByLogin(updateAdminDto.login);
    if (!admin) {
      throw new UnauthorizedException("Login yoki passwod noto'g'ri");
    }
    const validPassword = await bcrypt.compare(
      updateAdminDto.hashed_password,
      admin.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("Login yoki passwod noto'g'ri");
    }
    return this.generateToken(admin);
  }
  /**********************************getLoging and getEmail ******************************************** */

  async getAdminByEmail(email: string): Promise<Admin> {
    return this.adminRepo.findOne({ where: { email }, include: { all: true } });
  }

  async getAdminByLogin(login: string): Promise<Admin> {
    return this.adminRepo.findOne({ where: { login }, include: { all: true } });
  }
  /****************************************************************************************** */

  async getAdmin(): Promise<Admin[]> {
    return this.adminRepo.findAll({ include: { all: true } });
  }

  async getAdminByID(id: number): Promise<Admin> {
    return this.adminRepo.findByPk(id);
  }

  async updateAdminById(
    id: number,
    updateAdminDto: UpdateAdminDto
  ): Promise<Admin> {
    const newAdmin = await this.adminRepo.update(updateAdminDto, {
      where: { id: id },
      returning: true,
    });
    return newAdmin[1][0];
  }

  async deleteAdminById(id: number): Promise<number> {
    return this.adminRepo.destroy({ where: { id } });
  }
}
